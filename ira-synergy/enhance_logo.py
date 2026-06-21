import os
from PIL import Image, ImageEnhance
import rembg

input_path = "public/images/navbar-logo-01"
output_path = "public/images/navbar-logo-enhanced.png"

# Load the image
with open(input_path, 'rb') as i:
    input_data = i.read()

# Remove background
output_data = rembg.remove(input_data)

# Save temporarily to load with PIL
with open(output_path, 'wb') as o:
    o.write(output_data)

# Open with PIL to enhance
img = Image.open(output_path)

# Enhance contrast
enhancer = ImageEnhance.Contrast(img)
img = enhancer.enhance(1.2) # 20% more contrast

# Enhance color/saturation
enhancer = ImageEnhance.Color(img)
img = enhancer.enhance(1.3) # 30% more color

# Enhance sharpness
enhancer = ImageEnhance.Sharpness(img)
img = enhancer.enhance(1.5) # 50% sharper

# Save the final image
img.save(output_path)
print(f"Processed image saved to {output_path}")
