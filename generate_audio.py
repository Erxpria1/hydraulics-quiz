#!/usr/bin/env python3
"""Generate TTS audio files for hydraulics quiz questions."""

import os
import re
from gtts import gTTS

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)


def clean_text_for_tts(text):
    """Remove KaTeX formatting and clean text for TTS."""
    if not text:
        return ""

    text = re.sub(r"\$\$.*?\$\$", "", text, flags=re.DOTALL)
    text = re.sub(r"\$.*?\$", "", text, flags=re.DOTALL)
    text = re.sub(r"\(.*?\)", "", text)
    text = re.sub(r"\[.*?\]", "", text)
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)
    text = re.sub(r"\*(.*?)\*", r"\1", text)

    text = re.sub(r"\\frac\{([^}]*)\}\{([^}]*)\}", r"\1 bölü \2", text)
    text = re.sub(r"\\rho[_\w]*", "ro", text)
    text = re.sub(r"\\mu", "miu", text)
    text = re.sub(r"\\pi", "pi", text)
    text = re.sub(r"\\cdot", "çarpı", text)
    text = re.sub(r"\\times", "çarpı", text)
    text = re.sub(r"\\sqrt\{([^}]*)\}", r"karekök \1", text)

    text = re.sub(r"\^2", " kare", text)
    text = re.sub(r"\^3", " küp", text)
    text = re.sub(r"\^(\d+)", r" üssü \1", text)

    text = text.replace("\\Delta", "delta")
    text = text.replace("\\Omega", "omega")
    text = text.replace("\\alpha", "alfa")
    text = text.replace("\\beta", "beta")
    text = text.replace("\\gamma", "gama")
    text = text.replace("\\lambda", "lambda")
    text = text.replace("\\sigma", "sigma")
    text = text.replace("\\text{", "")
    text = text.replace("}", "")
    text = text.replace("{", "")

    text = re.sub(r"m\/s²", "metre bölü saniye kare", text)
    text = re.sub(r"kg\/m³", "kilogram bölü metre küp", text)
    text = re.sub(r"Pa·s", "paskal saniye", text)
    text = re.sub(r"mm", "milimetre", text)
    text = re.sub(r"cm", "santimetre", text)
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


def generate_audio(text, filename, lang="tr"):
    """Generate audio file from text."""
    filepath = os.path.join(AUDIO_DIR, filename)
    if os.path.exists(filepath):
        print(f"  ✓ {filename} (exists)")
        return filepath

    cleaned = clean_text_for_tts(text)
    if not cleaned or len(cleaned) < 10:
        print(f"  ✗ {filename}: Text too short/empty")
        return None

    if len(cleaned) > 5000:
        cleaned = cleaned[:5000]

    try:
        tts = gTTS(text=cleaned, lang=lang, slow=False)
        tts.save(filepath)
        print(f"  ✓ {filename}")
        return filepath
    except Exception as e:
        print(f"  ✗ Error: {filename}: {e}")
        return None


def main():
    import json

    with open("questions.js", "r") as f:
        content = f.read()

    narrations = re.findall(r'narration:\s*\{[^}]*tr:\s*"([^"]*)"', content)
    solutions = re.findall(
        r'solution:\s*\{.*?tr:\s*"((?:[^"\\]|\\.)*)"', content, re.DOTALL
    )

    print(f"Found {len(narrations)} narrations, {len(solutions)} solutions\n")

    audio_files = {}

    for i, (narration, solution) in enumerate(zip(narrations, solutions), 1):
        qid = i
        print(f"Q{qid}:")

        result = generate_audio(narration, f"q{qid}_narration.mp3")
        if result:
            audio_files[f"q{qid}_narration"] = f"audio/q{qid}_narration.mp3"

        short_sol = solution[:3000] if len(solution) > 3000 else solution
        result = generate_audio(short_sol, f"q{qid}_solution.mp3")
        if result:
            audio_files[f"q{qid}_solution"] = f"audio/q{qid}_solution.mp3"

        print()

    print("\n=== Summary ===")
    print(f"Generated {len(audio_files)} audio files")

    with open("audio_files.json", "w") as f:
        json.dump(audio_files, f, indent=2)
    print(f"Saved to audio_files.json")


if __name__ == "__main__":
    main()
