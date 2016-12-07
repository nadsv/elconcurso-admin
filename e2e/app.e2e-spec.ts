import { ElconcursoAdminPage } from './app.po';

describe('elconcurso-admin App', function() {
  let page: ElconcursoAdminPage;

  beforeEach(() => {
    page = new ElconcursoAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
