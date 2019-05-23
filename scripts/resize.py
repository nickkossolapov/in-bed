from PIL import Image
import glob, os

size = 128, 128

img_dirs = ['begging', 'fred', 'gustavo', 'sweet']

for img_dir in img_dirs:
    size = 300, 10000

    for ind, infile in enumerate(glob.glob(f"./originals/{img_dir}/*.jpg")):
        file, ext = os.path.splitext(infile)
        im = Image.open(infile)
        im.thumbnail(size)
        filename = f"./assets/{img_dir}/{ind}.jpg"
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        im.save(filename, "JPEG")
