const validateProduct = (data) => {
  if (typeof data.id !== 'number') return false;
  if (typeof data.name !== 'string') return false;
  if (typeof data.description !== 'string') return false;
  if (typeof data.price !== 'number' || data.price < 0) return false;
  if (!Array.isArray(data.tags) || !data.tags.every(i => typeof i === 'string')) return false;
  if (!Array.isArray(data.images) || !data.images.every(i => typeof i === 'string')) return false;
  if (typeof data.createdAt !== 'string') return false;
  return true;
}

export default validateProduct;