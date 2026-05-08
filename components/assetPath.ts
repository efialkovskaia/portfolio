export function assetPath(path: string) {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  if (!path.startsWith("/")) {
    return `${basePath}/${path}`;
  }

  return `${basePath}${path}`;
}
