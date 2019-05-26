import { Component, Prop, h } from '@stencil/core';
<% if (optionalFeatures.includes('Helmet')) { %>import Helmet from '@stencil/helmet';<% } %>

@Component({
  tag: '<%= paramCasePageName %>',
  styleUrl: '<%= paramCasePageName %>.<% if(stylingSupport.includes("Sass")) { %>scss<% } %><% if(!stylingSupport.includes("Sass")) { %>css<% } %>',
  shadow: true
})
export class <%=pageName%> {
  <% if (optionalFeatures.includes('Helmet')) { %>
  @Prop() title: string = "<%=pageName%>";
  @Prop() description: string = "description";
  <% } %>

  render() {
  return (
    <div class="<%= paramCasePageName %>">
      <h1><%= pageName %></h1>
      <% if(optionalFeatures.includes('Helmet')) { %>
        <Helmet>
          <title>{this.title}</title>
          <meta name="description" content={this.description} />
        </Helmet>
        <% } %>
      </div>
  );
}
}
