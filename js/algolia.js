const search = instantsearch({
    indexName: 'goinghome0331.github.io',
    searchClient: algoliasearch('4S22XHLPU9', '31ba5a00695336e352e481ef3093c369'),
    searchFunction(helper) {
        if (helper.state.query == '') {
            return;
        }
        helper.search();
    }
});
search.addWidgets([
    instantsearch.widgets.stats({
        container: '#stats',
        templates: {
            text: `
    {{#hasNoResults}}No results{{/hasNoResults}}
    {{#hasOneResult}}1 result{{/hasOneResult}}
    {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}}
    found in {{processingTimeMS}}ms
  `,
        },
    }),
    instantsearch.widgets.searchBox({
        container: '#searchbox',
        showReset: false,
    }),
    instantsearch.widgets.poweredBy({
        container: '#poweredby',
    }),
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: 'No Results for <q>{{query}}</q>',
            item: `
      <div>
        <a href="{{url}}">
            <div class="hit-name">
                {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
            </div>
        </a>
      </div>
    `,
        },
    }),
    instantsearch.widgets.pagination({
        container: '#pagination',
    }),
]);
search.start();