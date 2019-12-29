import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div id="search">
                <form
                    action="/tim-kiem.html"
                    name="search_form"
                    method="get"
                >
                    <div className="search-box">
                        <input
                            type="text"
                            name="q"
                            id="search_input"
                            placeholder="Bạn cần tìm gì hôm nay ?"
                            autoComplete="off"
                        />
                        <button>
                            <i className="nki-search"/>
                        </button>
                        {/*
                                                      <div class="search-hint">
                                                          <div class="search-result" style="display: none;">
                                                              <ul class="search-cate">
                                                                  <li></li>
                                                              </ul>
                                                              <ul class="search-product-item">
                                                                  <li></li>
                                                              </ul>
                                                          </div>
                                                      </div>
                                                      */}
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;