import { z } from 'zod';

const commentSchema = z.object({
  content: z.string().min(1, '댓글 내용을 입력해 주세요.'),
})

export const validateComment = (req, res, next) => {
  try {
    commentSchema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: '댓글 유효성 검사 실패',
        errors: err.errors.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
      })
    }
    next(err);
  }
}