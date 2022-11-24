import ScaffoldRepository from '../domain/repository';

export default class ScaffoldUseCase {
  constructor(private readonly repository: ScaffoldRepository) {}
  public static inject = ['ScaffoldRepository'] as const;
}
