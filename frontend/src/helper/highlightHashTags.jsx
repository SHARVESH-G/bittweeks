
export function highlightHashtags(text) {
  const parts = text.split(/(\s+)/);

  return parts.map((part, index) => {
    if (part.startsWith("#") && part.length > 1) {
      return (
        <span key={index} className="text-[var(--colorPrimary)] cursor-pointer font-semibold">
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}
