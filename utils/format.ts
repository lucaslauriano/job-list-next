function addSpaceAfterDot(htmlString: string) {
  return htmlString.replace(/\./g, '. ');
}

export function getFormattedDescription(htmlString: string | undefined) {
  if (!htmlString) {
    return null;
  }
  const textWithoutTags = htmlString.replace(/<\/?[^>]+(>|$)/g, '');

  const lines = textWithoutTags
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '');

  return lines.slice(1).map((line) => addSpaceAfterDot(line));
}

export function getFormattedDate(
  dateString: string | null
): string | undefined {
  return dateString
    ? new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
        new Date(dateString)
      )
    : undefined;
}
