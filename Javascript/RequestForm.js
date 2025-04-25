function updateColorPreview() {
  const selected = document.getElementById("color").value;

  // Match hex colors in the format #XXXXXX
  const hexMatches = selected.match(/#([a-fA-F0-9]{6})/g);

  const previewBox = document.getElementById("colorPreview");

  if (hexMatches) {
    if (hexMatches.length === 2) {
      // Two-tone: use a gradient
      previewBox.style.background = `linear-gradient(to right, ${hexMatches[0]} 50%, ${hexMatches[1]} 50%)`;
    } else {
      // Single color
      previewBox.style.background = hexMatches[0];
    }
  } else {
    previewBox.style.background = "transparent";
  }
}

// Initialize preview on load
updateColorPreview();
