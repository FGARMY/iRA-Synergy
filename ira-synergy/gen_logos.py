import os

iso_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#cc0000" />
  <text x="50" y="45" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">ISO</text>
  <text x="50" y="75" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">9001:2015</text>
</svg>"""

iso14_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#008000" />
  <text x="50" y="45" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">ISO</text>
  <text x="50" y="75" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">14001:2015</text>
</svg>"""

gst_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <rect width="200" height="100" rx="10" fill="#003366" />
  <text x="100" y="60" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">GST</text>
  <text x="100" y="85" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#ff9933" text-anchor="middle">REGISTERED</text>
</svg>"""

gem_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <rect width="200" height="100" fill="#ffffff" stroke="#e0e0e0" stroke-width="2" />
  <text x="100" y="60" font-family="Arial, sans-serif" font-size="50" font-weight="900" fill="#e63946" text-anchor="middle">GeM</text>
  <text x="100" y="85" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#1d3557" text-anchor="middle">Government e Marketplace</text>
</svg>"""

msme_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <rect width="200" height="100" fill="#ffffff" stroke="#e0e0e0" stroke-width="2" />
  <text x="100" y="55" font-family="Arial, sans-serif" font-size="44" font-weight="900" fill="#138808" text-anchor="middle">MSME</text>
  <text x="100" y="80" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#ff9933" text-anchor="middle">MINISTRY OF MSME</text>
</svg>"""

startup_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
  <rect width="200" height="100" fill="#ffffff" stroke="#e0e0e0" stroke-width="2" />
  <path d="M 50 50 Q 100 0 150 50" fill="none" stroke="#ff9933" stroke-width="8" />
  <text x="100" y="70" font-family="Arial, sans-serif" font-size="36" font-weight="900" fill="#222" text-anchor="middle">startup</text>
  <text x="100" y="90" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#138808" text-anchor="middle">india</text>
</svg>"""

files = {
    "iso-9001.svg": iso_svg,
    "iso-14001.svg": iso14_svg,
    "gst.svg": gst_svg,
    "gem.svg": gem_svg,
    "msme.svg": msme_svg,
    "startup-india.svg": startup_svg
}

for name, content in files.items():
    with open(os.path.join("public", "images", "certifications", name), "w") as f:
        f.write(content)

print("SVGs generated successfully.")
