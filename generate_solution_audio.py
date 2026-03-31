#!/usr/bin/env python3
"""Generate solution audio files with edge-tts."""

import asyncio
import os
import re
import json
import edge_tts

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

VOICE = "tr-TR-EmelNeural"


def clean_text_for_tts(text):
    """Remove KaTeX formatting and clean text for TTS."""
    if not text:
        return ""

    text = re.sub(r"\$\$.*?\$\$", "", text, flags=re.DOTALL)
    text = re.sub(r"\$.*?\$", "", text, flags=re.DOTALL)
    text = re.sub(r"\*\*\*(.*?)\*\*\*", r"\1", text)
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)
    text = re.sub(r"\*(.*?)\*", r"\1", text)

    text = re.sub(r"\\frac\{([^}]*)\}\{([^}]*)\}", r"\1 bölü \2", text)
    text = re.sub(r"\\rho[_\w]*", "ro", text)
    text = re.sub(r"\\mu", "miu", text)
    text = re.sub(r"\\pi", "pi", text)
    text = re.sub(r"\\cdot", "çarpı", text)
    text = re.sub(r"\\times", "çarpı", text)
    text = re.sub(r"\\sqrt\{([^}]*)\}", r"karekök \1", text)
    text = re.sub(r"\\Delta", "delta", text)
    text = re.sub(r"\\Omega", "omega", text)
    text = re.sub(r"\\alpha", "alfa", text)
    text = re.sub(r"\\beta", "beta", text)
    text = re.sub(r"\\gamma", "gama", text)
    text = re.sub(r"\\lambda", "lambda", text)
    text = re.sub(r"\\sigma", "sigma", text)
    text = re.sub(r"\\text\{([^}]*)\}", r"\1", text)
    text = re.sub(r"\{|\}", "", text)

    text = re.sub(r"\^2", " kare", text)
    text = re.sub(r"\^3", " küp", text)
    text = re.sub(r"\^(\d+)", r" üssü \1", text)

    text = re.sub(r"\(.*?\)", "", text)
    text = re.sub(r"\[.*?\]", "", text)

    text = re.sub(r"m/s²", "metre bölü saniye kare", text)
    text = re.sub(r"kg/m³", "kilogram bölü metre küp", text)
    text = re.sub(r"Pa·s", "paskal saniye", text)
    text = re.sub(r"\bmm\b", "milimetre", text)
    text = re.sub(r"\bcm\b", "santimetre", text)
    text = re.sub(r"m³", "metre küp", text)
    text = re.sub(r"m²", "metre kare", text)

    text = re.sub(r"≈", "yaklaşık", text)
    text = re.sub(r"÷", "bölü", text)
    text = re.sub(r"×", "çarpı", text)
    text = re.sub(r"−", "eksi", text)
    text = re.sub(r"%", "yüzde", text)

    text = re.sub(r"\n+", ". ", text)
    text = re.sub(r"\s+", " ", text)
    text = text.strip()

    return text


async def generate_audio_async(text, filename):
    """Generate audio file from text using edge-tts."""
    filepath = os.path.join(AUDIO_DIR, filename)

    cleaned = clean_text_for_tts(text)
    if not cleaned or len(cleaned) < 10:
        print(f"  ✗ {filename}: Text too short/empty")
        return None

    if len(cleaned) > 5000:
        cleaned = cleaned[:5000]
        print(f"  ! Truncated to 5000 chars")

    try:
        communicate = edge_tts.Communicate(cleaned, VOICE, pitch="-2Hz", rate="+5%")
        await communicate.save(filepath)
        print(f"  ✓ {filename}")
        return filepath
    except Exception as e:
        print(f"  ✗ Error: {filename}: {e}")
        return None


def extract_solutions():
    """Extract solution texts from questions.js"""
    with open("questions.js", "r") as f:
        content = f.read()

    solutions = []
    lines = content.split("\n")
    in_solution = False
    in_tr = False
    brace_count = 0
    current_solution = []

    for line in lines:
        if "solution:" in line and "{" in line:
            in_solution = True
            brace_count = line.count("{") - line.count("}")
            continue

        if in_solution:
            brace_count += line.count("{") - line.count("}")

            if "tr:" in line:
                in_tr = True
                # Start capturing after tr:
                match = re.search(r'tr:\s*"(.+)', line)
                if match:
                    current_solution.append(match.group(1))
                    if line.strip().endswith('"'):
                        in_tr = False
                        solutions.append(" ".join(current_solution))
                        current_solution = []
                continue

            if in_tr:
                current_solution.append(line.strip().strip('"').strip(","))
                if line.strip().endswith('"') or "}," in line:
                    in_tr = False
                    if current_solution:
                        solutions.append(" ".join(current_solution))
                        current_solution = []

            if brace_count <= 0 and in_solution:
                in_solution = False
                if current_solution:
                    solutions.append(" ".join(current_solution))
                    current_solution = []

    return solutions


async def main():
    solutions = extract_solutions()

    print(f"Found {len(solutions)} solutions\n")
    print(f"Using voice: {VOICE}\n")

    audio_files = {}

    for i, solution in enumerate(solutions, 1):
        qid = i
        print(f"Q{qid} solution:")

        short_sol = solution[:5000] if len(solution) > 5000 else solution
        result = await generate_audio_async(short_sol, f"q{qid}_solution.mp3")
        if result:
            audio_files[f"q{qid}_solution"] = f"audio/q{qid}_solution.mp3"

        print()

    print("\n=== Summary ===")
    print(f"Generated {len(audio_files)} solution audio files")

    with open("audio_files.json", "w") as f:
        json.dump(audio_files, f, indent=2)


if __name__ == "__main__":
    asyncio.run(main())
