"use stict";

const { assert } = require("chai");

const { genAll } = require("../index");

describe("#genAll()", function() {
  it("should generate files of jsdoc annotation for all files with @annotateJsdoc declared", async () => {
    const annotator = genAll({
      source: "examples/genAll/server/api/**/*.js",
      outputDir: "../examples/genAll/testOutput"
    });

    assert.deepEqual(
      annotator.getFileAnnotations(
        "../examples/genAll/server/api/ArticleApiController.js"
      ),
      {
        all: {
          getConfig: {
            all: {
              helper: {
                originalTitle: "helper",
                title: "helper",
                text: "",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "getConfig",
              type: "FunctionDeclaration",
              memberOf: "<module>"
            }
          },
          getUtils: {
            all: {
              helper: {
                originalTitle: "helper",
                title: "helper",
                text: "",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "getUtils",
              type: "ArrowFunctionExpression",
              memberOf: "<anonymous>"
            }
          },
          createArticle: {
            all: {
              apiType: {
                originalTitle: "apiType",
                title: "apitype",
                text: "POST",
                value: "POST",
                hasOthers: false
              },
              apiPath: {
                originalTitle: "apiPath",
                title: "apipath",
                text: "/api/i/article",
                value: "/api/i/article",
                hasOthers: false
              },
              apiBody: {
                originalTitle: "apiBody",
                title: "apibody",
                text:
                  '{"title": "String", "subtitle":"String", "content": "String"}',
                value:
                  '{"title": "String", "subtitle":"String", "content": "String"}',
                hasOthers: false
              },
              apiKey: {
                originalTitle: "apiKey",
                title: "apikey",
                text: "Create Article",
                value: "Create Article",
                hasOthers: false
              },
              apiDescription: {
                originalTitle: "apiDescription",
                title: "apidescription",
                text: "Create a new article",
                value: "Create a new article",
                hasOthers: false
              },
              apiResponse: {
                originalTitle: "apiResponse",
                title: "apiresponse",
                text: "Article object",
                value: "Article object",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "createArticle",
              type: "MethodDefinition",
              memberOf: "ArticleApiController"
            }
          },
          aPrivateMethod: {
            all: {
              private: {
                title: "private",
                originalTitle: "private",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "aPrivateMethod",
              type: "MethodDefinition",
              memberOf: "ArticleApiController"
            }
          },
          getC: {
            all: {
              helper: {
                originalTitle: "helper",
                title: "helper",
                text: "",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "getC",
              type: "FunctionExpression",
              memberOf: "ArticleApiController"
            }
          },
          getD: {
            all: {
              helper: {
                originalTitle: "helper",
                title: "helper",
                text: "",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "getD",
              type: "ArrowFunctionExpression",
              memberOf: "ArticleApiController"
            }
          },
          aVar: {
            all: {
              avar: {
                originalTitle: "avar",
                title: "avar",
                text: "string",
                value: "string",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "aVar",
              type: "Literal",
              memberOf: "<anonymous>"
            }
          },
          _anotherPrivateMethod: {
            all: {
              private: {
                title: "private",
                originalTitle: "private",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "_anotherPrivateMethod",
              type: "MethodDefinition",
              memberOf: "ArticleApiController"
            }
          },
          _privateVar: {
            all: {
              avar: {
                originalTitle: "avar",
                title: "avar",
                text: "object",
                value: "object",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "_privateVar",
              type: "ObjectExpression",
              memberOf: "ArticleApiController"
            }
          },
          aField: {
            all: {
              getter: {
                originalTitle: "getter",
                title: "getter",
                text: "cool getter",
                value: "cool getter",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "aField",
              type: "MethodDefinition",
              memberOf: "ArticleApiController"
            }
          },
          getArticle: {
            all: {
              param: {
                title: "param",
                originalTitle: "param",
                value: {
                  type: { names: ["HttpRequest"] },
                  description: "The http request object",
                  name: "req"
                },
                text: "The http request object",
                hasOthers: true,
                others: [
                  {
                    title: "param",
                    originalTitle: "param",
                    value: {
                      type: { names: ["HttpResponse"] },
                      description: "The http response object",
                      name: "res"
                    },
                    text: "The http response object"
                  },
                  {
                    title: "param",
                    originalTitle: "param",
                    value: { type: { names: ["function"] }, name: "next" }
                  }
                ]
              },
              returns: {
                title: "returns",
                originalTitle: "returns",
                value: {
                  type: { names: ["Promise.<HttpResponse>"] },
                  description: "cool stuff man"
                },
                text: "cool stuff man",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "getArticle",
              type: "MethodDefinition",
              memberOf: "ArticleApiController"
            }
          },
          aProtectedMethod: {
            all: {
              protected: {
                title: "protected",
                originalTitle: "protected",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "aProtectedMethod",
              type: "MethodDefinition",
              memberOf: "ArticleApiController"
            }
          }
        },
        class: {
          ArticleApiController: {
            method: {
              createArticle: {
                all: {
                  apiType: {
                    originalTitle: "apiType",
                    title: "apitype",
                    text: "POST",
                    value: "POST",
                    hasOthers: false
                  },
                  apiPath: {
                    originalTitle: "apiPath",
                    title: "apipath",
                    text: "/api/i/article",
                    value: "/api/i/article",
                    hasOthers: false
                  },
                  apiBody: {
                    originalTitle: "apiBody",
                    title: "apibody",
                    text:
                      '{"title": "String", "subtitle":"String", "content": "String"}',
                    value:
                      '{"title": "String", "subtitle":"String", "content": "String"}',
                    hasOthers: false
                  },
                  apiKey: {
                    originalTitle: "apiKey",
                    title: "apikey",
                    text: "Create Article",
                    value: "Create Article",
                    hasOthers: false
                  },
                  apiDescription: {
                    originalTitle: "apiDescription",
                    title: "apidescription",
                    text: "Create a new article",
                    value: "Create a new article",
                    hasOthers: false
                  },
                  apiResponse: {
                    originalTitle: "apiResponse",
                    title: "apiresponse",
                    text: "Article object",
                    value: "Article object",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "createArticle",
                  type: "MethodDefinition",
                  memberOf: "ArticleApiController"
                }
              },
              aPrivateMethod: {
                all: {
                  private: {
                    title: "private",
                    originalTitle: "private",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "aPrivateMethod",
                  type: "MethodDefinition",
                  memberOf: "ArticleApiController"
                }
              },
              getC: {
                all: {
                  helper: {
                    originalTitle: "helper",
                    title: "helper",
                    text: "",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "getC",
                  type: "FunctionExpression",
                  memberOf: "ArticleApiController"
                }
              },
              getD: {
                all: {
                  helper: {
                    originalTitle: "helper",
                    title: "helper",
                    text: "",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "getD",
                  type: "ArrowFunctionExpression",
                  memberOf: "ArticleApiController"
                }
              },
              _anotherPrivateMethod: {
                all: {
                  private: {
                    title: "private",
                    originalTitle: "private",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "_anotherPrivateMethod",
                  type: "MethodDefinition",
                  memberOf: "ArticleApiController"
                }
              },
              aField: {
                all: {
                  getter: {
                    originalTitle: "getter",
                    title: "getter",
                    text: "cool getter",
                    value: "cool getter",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "aField",
                  type: "MethodDefinition",
                  memberOf: "ArticleApiController"
                }
              },
              getArticle: {
                all: {
                  param: {
                    title: "param",
                    originalTitle: "param",
                    value: {
                      type: { names: ["HttpRequest"] },
                      description: "The http request object",
                      name: "req"
                    },
                    text: "The http request object",
                    hasOthers: true,
                    others: [
                      {
                        title: "param",
                        originalTitle: "param",
                        value: {
                          type: { names: ["HttpResponse"] },
                          description: "The http response object",
                          name: "res"
                        },
                        text: "The http response object"
                      },
                      {
                        title: "param",
                        originalTitle: "param",
                        value: { type: { names: ["function"] }, name: "next" }
                      }
                    ]
                  },
                  returns: {
                    title: "returns",
                    originalTitle: "returns",
                    value: {
                      type: { names: ["Promise.<HttpResponse>"] },
                      description: "cool stuff man"
                    },
                    text: "cool stuff man",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "getArticle",
                  type: "MethodDefinition",
                  memberOf: "ArticleApiController"
                }
              },
              aProtectedMethod: {
                all: {
                  protected: {
                    title: "protected",
                    originalTitle: "protected",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "aProtectedMethod",
                  type: "MethodDefinition",
                  memberOf: "ArticleApiController"
                }
              }
            },
            field: {
              _privateVar: {
                all: {
                  avar: {
                    originalTitle: "avar",
                    title: "avar",
                    text: "object",
                    value: "object",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "_privateVar",
                  type: "ObjectExpression",
                  memberOf: "ArticleApiController"
                }
              }
            }
          }
        },
        fileRootPath:
          "/Users/lincolndaniel/Documents/programming/files-jsdoc-annotator/examples/genAll/server/api/ArticleApiController.js"
      }
    );

    assert.deepEqual(
      annotator.getFileAnnotations(
        "../examples/genAll/server/api/DiscussionApiController.js"
      ),
      {
        all: {
          createDiscussion: {
            all: {
              apiType: {
                originalTitle: "apiType",
                title: "apitype",
                text: "POST",
                value: "POST",
                hasOthers: false
              },
              apiPath: {
                originalTitle: "apiPath",
                title: "apipath",
                text: "/api/i/discussion",
                value: "/api/i/discussion",
                hasOthers: false
              },
              apiBody: {
                originalTitle: "apiBody",
                title: "apibody",
                text:
                  '{"title": "String", "subtitle":"String", "content": "String"}',
                value:
                  '{"title": "String", "subtitle":"String", "content": "String"}',
                hasOthers: false
              },
              apiKey: {
                originalTitle: "apiKey",
                title: "apikey",
                text: "Create Discussion",
                value: "Create Discussion",
                hasOthers: false
              },
              apiDescription: {
                originalTitle: "apiDescription",
                title: "apidescription",
                text: "Create a new discussion",
                value: "Create a new discussion",
                hasOthers: false
              },
              apiResponse: {
                originalTitle: "apiResponse",
                title: "apiresponse",
                text: "Discussion object",
                value: "Discussion object",
                hasOthers: false
              }
            },
            codeBlockMeta: {
              name: "createDiscussion",
              type: "FunctionExpression",
              memberOf: "DiscussionApiController"
            }
          }
        },
        class: {
          DiscussionApiController: {
            field: {},
            method: {
              createDiscussion: {
                all: {
                  apiType: {
                    originalTitle: "apiType",
                    title: "apitype",
                    text: "POST",
                    value: "POST",
                    hasOthers: false
                  },
                  apiPath: {
                    originalTitle: "apiPath",
                    title: "apipath",
                    text: "/api/i/discussion",
                    value: "/api/i/discussion",
                    hasOthers: false
                  },
                  apiBody: {
                    originalTitle: "apiBody",
                    title: "apibody",
                    text:
                      '{"title": "String", "subtitle":"String", "content": "String"}',
                    value:
                      '{"title": "String", "subtitle":"String", "content": "String"}',
                    hasOthers: false
                  },
                  apiKey: {
                    originalTitle: "apiKey",
                    title: "apikey",
                    text: "Create Discussion",
                    value: "Create Discussion",
                    hasOthers: false
                  },
                  apiDescription: {
                    originalTitle: "apiDescription",
                    title: "apidescription",
                    text: "Create a new discussion",
                    value: "Create a new discussion",
                    hasOthers: false
                  },
                  apiResponse: {
                    originalTitle: "apiResponse",
                    title: "apiresponse",
                    text: "Discussion object",
                    value: "Discussion object",
                    hasOthers: false
                  }
                },
                codeBlockMeta: {
                  name: "createDiscussion",
                  type: "FunctionExpression",
                  memberOf: "DiscussionApiController"
                }
              }
            }
          }
        },
        fileRootPath:
          "/Users/lincolndaniel/Documents/programming/files-jsdoc-annotator/examples/genAll/server/api/DiscussionApiController.js"
      }
    );
  });
});
