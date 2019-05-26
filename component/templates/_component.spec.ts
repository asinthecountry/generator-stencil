import { newSpecPage } from '@stencil/core/testing';
import { <%=componentName%> } from './<%=paramCaseComponentName%>';

describe('<%=paramCaseComponentName%>', () => {
  it('should build', () => {
    expect(new <%=componentName%>()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await newSpecPage({
        components: [<%=componentName%>],
        html: '<<%=paramCaseComponentName%>></<%=paramCaseComponentName%>>'
      });
    });
  });
});
