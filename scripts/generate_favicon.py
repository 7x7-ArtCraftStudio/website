from pathlib import Path
import sys

from PIL import Image, ImageChops, ImageEnhance, ImageOps


source_path = Path(sys.argv[1])
output_dir = Path(sys.argv[2])
output_dir.mkdir(parents=True, exist_ok=True)

source = Image.open(source_path).convert("RGB")
symbol_area = source.crop((0, 0, source.width, int(source.height * 0.74)))
ink_mask = ImageOps.invert(symbol_area.convert("L"))
ink_mask = ImageEnhance.Contrast(ink_mask).enhance(2.4)
bounds = ink_mask.point(lambda value: 255 if value > 22 else 0).getbbox()

if bounds is None:
    raise RuntimeError("Could not find the logo mark in the source image")

mark = symbol_area.crop(bounds)
mark_mask = ink_mask.crop(bounds)

canvas_size = 512
max_mark_size = 430
scale = min(max_mark_size / mark.width, max_mark_size / mark.height)
target_size = (max(1, round(mark.width * scale)), max(1, round(mark.height * scale)))
mark_mask = mark_mask.resize(target_size, Image.Resampling.LANCZOS)

canvas = Image.new("RGBA", (canvas_size, canvas_size), "#eee6d7")
ink = Image.new("RGBA", target_size, "#17130f")
position = ((canvas_size - target_size[0]) // 2, (canvas_size - target_size[1]) // 2)
canvas.alpha_composite(Image.composite(ink, Image.new("RGBA", target_size), mark_mask), position)

canvas.save(output_dir / "favicon.png", optimize=True)
canvas.resize((180, 180), Image.Resampling.LANCZOS).save(
    output_dir / "apple-touch-icon.png", optimize=True
)
canvas.resize((32, 32), Image.Resampling.LANCZOS).save(
    output_dir / "favicon-32x32.png", optimize=True
)
canvas.resize((16, 16), Image.Resampling.LANCZOS).save(
    output_dir / "favicon-16x16.png", optimize=True
)
canvas.convert("RGB").save(
    output_dir / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)]
)
