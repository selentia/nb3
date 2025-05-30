const validateArticle = (data) => {
  if (typeof data.id !== 'number') return false;
  if (typeof data.title !== 'string') return false;
  if (typeof data.content !== 'string') return false;
  if (typeof data.image !== 'string') return false;
  if (typeof data.createdAt !== 'string') return false;
  if (typeof data.updatedAt !== 'string') return false;
  return true;
}

export default validateArticle;