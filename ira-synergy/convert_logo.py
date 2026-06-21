from PIL import Image

input_path = "public/images/navbar-logo-02"
output_path = "public/images/navbar-logo-02.png"

try:
    img = Image.open(input_path)
    img.save(output_path, "PNG")
    print(f"Successfully converted image to {output_path}")
except Exception as e:
    print(f"Error converting image: {e}")
