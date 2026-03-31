#!/usr/bin/env python3
"""Generate TTS audio files for hydraulics quiz questions using edge-tts."""

import asyncio
import os
import re
import json
import edge_tts

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

TURKISH_VOICES = [
    "tr-TR-DuyguNeural",  # Female - warm
    "tr-TR-EmelNeural",  # Female
    "tr-TR-SertanNeural",  # Male
]

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

    if os.path.exists(filepath):
        print(f"  ✓ {filename} (exists)")
        return filepath

    cleaned = clean_text_for_tts(text)
    if not cleaned or len(cleaned) < 10:
        print(f"  ✗ {filename}: Text too short/empty")
        return None

    if len(cleaned) > 5000:
        cleaned = cleaned[:5000]
        print(f"  ! {filename}: Text truncated to 5000 chars")

    try:
        communicate = edge_tts.Communicate(cleaned, VOICE, pitch="-2Hz", rate="+5%")
        await communicate.save(filepath)
        print(f"  ✓ {filename}")
        return filepath
    except Exception as e:
        print(f"  ✗ Error: {filename}: {e}")
        return None


async def main():
    with open("questions.js", "r") as f:
        content = f.read()

    narrations = re.findall(r'narration:\s*\{[^}]*tr:\s*"([^"]*)"', content)

    print(f"Found {len(narrations)} narrations\n")
    print(f"Using voice: {VOICE}\n")

    audio_files = {}

    for i, narration in enumerate(narrations, 1):
        qid = i
        print(f"Q{qid}:")

        result = await generate_audio_async(narration, f"q{qid}_narration.mp3")
        if result:
            audio_files[f"q{qid}_narration"] = f"audio/q{qid}_narration.mp3"

        print()

    print("\n=== Summary ===")
    print(f"Generated {len(audio_files)} audio files")

    with open("audio_files.json", "w") as f:
        json.dump(audio_files, f, indent=2)
    print(f"Saved to audio_files.json")


if __name__ == "__main__":
    asyncio.run(main())
