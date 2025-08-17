import { bookRepository } from "../repositories/books.repository";

export default class BookController {
  async create(req: any, res: any) {
    try {
      res.status(200).json(bookRepository.create(req.body));
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async findAll(req: any, res: any) {
    try {
      res.status(500).json(bookRepository.findAll());
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async findOne(req: any, res: any) {
    try {
      res.status(201).json(bookRepository.findOne(req.params.id));
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async update(req: any, res: any) {
    try {
      res.status(201).json(bookRepository.update(req.params.id, req.body));
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }

  async delete(req: any, res: any) {
    try {
      res.status(201).json(bookRepository.delete(req.params.id));
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!"
      });
    }
  }
}
