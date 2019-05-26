import { newSpecPage } from '@stencil/core/testing';
import { <%=pageName%> } from './<%=paramCasePageName%>';

describe('<%=paramCasePageName%>', () => {
  it('should build', () => {
    expect(new <%=pageName%>()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await newSpecPage({
        components: [<%=pageName%>],
        html: '<<%=paramCasePageName%>></<%=paramCasePageName%>>'
      });
    });
  });
});
