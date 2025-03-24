#!/bin/bash

# Install required tools if not present
if ! command -v cwebp &> /dev/null; then
    echo "Installing WebP tools..."
    brew install webp
fi

# Function to optimize image
optimize_image() {
    input_file=$1
    filename=$(basename -- "$input_file")
    name="${filename%.*}"
    output_dir=$(dirname "$input_file")
    output_file="$output_dir/$name.webp"

    # Skip if already webp
    if [[ $input_file == *.webp ]]; then
        return
    fi

    # Convert to WebP with high quality
    cwebp -q 85 -m 6 "$input_file" -o "$output_file"
    echo "Converted: $input_file -> $output_file"
}

# Process all images in the public directory
find ./public/images -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r file; do
    optimize_image "$file"
done

echo "Image optimization complete!"
