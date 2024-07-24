import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { OperacoesService } from './operacoes.service';

export class OperacaoDto {
  valor1: number
  valor2: number
}

@Controller('operacoes')
export class OperacoesController {
  constructor(private readonly operacoesService: OperacoesService) {}

  @Post('adicao')
  async adicao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.adicao(operacaoDto);
  }

  @Post('subtracao')
  async subtracao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.subtracao(operacaoDto);
  }

  @Post('multiplicacao')
  async multiplicacao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.multiplicacao(operacaoDto);
  }

  @Post('divisao')
  async divisao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.divisao(operacaoDto);
  }

  // @Get('listar')
  // async listarTodos() {
  //   return this.operacoesService.listarTodos();
  // }

  @Get('listar')
  listar(@Query('tipo') tipo?: number) {
    return this.operacoesService.listar(tipo ? +tipo : undefined);
  }
}