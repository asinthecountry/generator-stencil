import { Component, h } from '@stencil/core';

@Component({
  tag: '<%= paramCaseComponentName %>',
  styleUrl: '<%=paramCaseComponentName%>.<% if(stylingSupport.includes("Sass")) { %>scss<% } %><% if(!stylingSupport.includes("Sass")) { %>css<% } %>',
  shadow: true
})
export class <%=componentName%> {
  render() {
    return (
      <div class="<%= paramCaseComponentName %>">
        <%= componentName %>
      </div>
    );
  }
}
