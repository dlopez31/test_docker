import { ImagePipe } from './image.pipe';

describe('Pruebas ImagePipe', () => {
  let componente: ImagePipe;
  beforeEach(() => {
    componente = new ImagePipe();
  });

  it('create an instance', () => {
    const pipe = new ImagePipe();
    expect(pipe).toBeTruthy();
  });

  it('Debe retornar un string', () => {
    const urlImagen = componente.transform('www.lider.cl/catalogo/images/whiteLineIcon.svg');
    expect(typeof urlImagen).toBe('string');
  });

  it('Debe retornar un string concatenado con https', () => {
    const urlImagen = componente.transform('www.lider.cl/catalogo/images/whiteLineIcon.svg');
    expect(urlImagen).toContain('https');
  });
});
