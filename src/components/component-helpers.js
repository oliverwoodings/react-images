// @flow

export function getSource({ data, isFullscreen }) {
  let { source = data.src } = data;
  if (typeof source === 'string') return source;

  return isFullscreen ? source.fullscreen : source.regular;
}

export function getDownload ({ data }) {
  let { source = data.src } = data;
  if (typeof source === 'string') return source;

  return source.download
}

export function getThumbnail({ data }) {
  const { source = data.src } = data;

  if (typeof source === 'string') return source;

  return source.thumbnail;
}
