export function slugify(path: string) {
    return path.split("/").pop()?.replace(".webp", "");
}
