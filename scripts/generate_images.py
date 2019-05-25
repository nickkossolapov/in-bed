import glob
import os
import shutil
from PIL import Image


def delete_public_folders():
    print("Deleting old folders")
    shutil.rmtree("../public/large", ignore_errors=True)
    img_dirs = [img_dir for img_dir in glob.glob("../public/*/")]
    for img_dir in img_dirs:
        shutil.rmtree(img_dir, ignore_errors=True)

    print("Done deleting folders")


def create_new_images(large_size_width = 1200):
    dir_names = [name for name in os.listdir("./originals") if os.path.isdir("./originals/" + name)]

    for dir_name in dir_names:
        print("Using directory: " + dir_name)
        size = 300, 10000
        size_large = large_size_width, 10000

        for ind, infile in enumerate(glob.glob(f"./originals/{dir_name}/*.jpg")):
            im = Image.open(infile)
            im.thumbnail(size)
            filename = f"../public/{dir_name}/{ind}.jpg"
            os.makedirs(os.path.dirname(filename), exist_ok=True)
            im.save(filename, "JPEG")

            im_large = Image.open(infile)
            im_large.thumbnail(size_large)
            filename = f"../public/large/{dir_name}/{ind}.jpg"
            os.makedirs(os.path.dirname(filename), exist_ok=True)
            im_large.save(filename, "JPEG")

        print("Done")


if __name__ == "__main__":
    delete_public_folders()
    create_new_images(1200)
