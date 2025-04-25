  function updateColorPreview() {
    const selected = document.getElementById("color").value;
    const hex = selected.match(/\(#([a-f0-9]{6})\)/i)?.[1];
    document.getElementById("colorPreview").style.backgroundColor = "#" + hex;
  }

  // Initialize preview
  updateColorPreview();