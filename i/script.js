// /presentation/plugins/core/jquery-1.12.2.min.js //

/*! jQuery v1.12.2 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.2",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ra(b),
            i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});


// /presentation/plugins/core/jquery-migrate-1.3.0.js //

/*!
 * jQuery Migrate - v1.3.0 - 2016-01-13
 * Copyright jQuery Foundation and other contributors
 */

(function(jQuery, window, undefined) {
    jQuery.migrateVersion = "1.3.0";
    var warnedAbout = {};
    jQuery.migrateWarnings = [];
    if (!jQuery.migrateMute && window.console && window.console.log) {
        window.console.log("JQMIGRATE: Logging is active");
    }
    if (jQuery.migrateTrace === undefined) {
        jQuery.migrateTrace = true;
    }
    jQuery.migrateReset = function() {
        warnedAbout = {};
        jQuery.migrateWarnings.length = 0;
    };

    function migrateWarn(msg) {
        var console = window.console;
        if (!warnedAbout[msg]) {
            warnedAbout[msg] = true;
            jQuery.migrateWarnings.push(msg);
            if (console && console.warn && !jQuery.migrateMute) {
                console.warn("JQMIGRATE: " + msg);
                if (jQuery.migrateTrace && console.trace) {
                    console.trace();
                }
            }
        }
    }

    function migrateWarnProp(obj, prop, value, msg) {
        if (Object.defineProperty) {
            try {
                Object.defineProperty(obj, prop, {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        migrateWarn(msg);
                        return value;
                    },
                    set: function(newValue) {
                        migrateWarn(msg);
                        value = newValue;
                    }
                });
                return;
            } catch (err) {}
        }
        jQuery._definePropertyBroken = true;
        obj[prop] = value;
    }
    if (document.compatMode === "BackCompat") {
        migrateWarn("jQuery is not compatible with Quirks Mode");
    }
    var attrFn = jQuery("<input/>", {
            size: 1
        }).attr("size") && jQuery.attrFn,
        oldAttr = jQuery.attr,
        valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get || function() {
            return null;
        },
        valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set || function() {
            return undefined;
        },
        rnoType = /^(?:input|button)$/i,
        rnoAttrNodeType = /^[238]$/,
        rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ruseDefault = /^(?:checked|selected)$/i;
    migrateWarnProp(jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated");
    jQuery.attr = function(elem, name, value, pass) {
        var lowerName = name.toLowerCase(),
            nType = elem && elem.nodeType;
        if (pass) {
            if (oldAttr.length < 4) {
                migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
            }
            if (elem && !rnoAttrNodeType.test(nType) && (attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name]))) {
                return jQuery(elem)[name](value);
            }
        }
        if (name === "type" && value !== undefined && rnoType.test(elem.nodeName) && elem.parentNode) {
            migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
        }
        if (!jQuery.attrHooks[lowerName] && rboolean.test(lowerName)) {
            jQuery.attrHooks[lowerName] = {
                get: function(elem, name) {
                    var attrNode, property = jQuery.prop(elem, name);
                    return property === true || typeof property !== "boolean" && (attrNode = elem.getAttributeNode(name)) && attrNode.nodeValue !== false ? name.toLowerCase() : undefined;
                },
                set: function(elem, value, name) {
                    var propName;
                    if (value === false) {
                        jQuery.removeAttr(elem, name);
                    } else {
                        propName = jQuery.propFix[name] || name;
                        if (propName in elem) {
                            elem[propName] = true;
                        }
                        elem.setAttribute(name, name.toLowerCase());
                    }
                    return name;
                }
            };
            if (ruseDefault.test(lowerName)) {
                migrateWarn("jQuery.fn.attr('" + lowerName + "') might use property instead of attribute");
            }
        }
        return oldAttr.call(jQuery, elem, name, value);
    };
    jQuery.attrHooks.value = {
        get: function(elem, name) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrGet.apply(this, arguments);
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value') no longer gets properties");
            }
            return name in elem ? elem.value : null;
        },
        set: function(elem, value) {
            var nodeName = (elem.nodeName || "").toLowerCase();
            if (nodeName === "button") {
                return valueAttrSet.apply(this, arguments);
            }
            if (nodeName !== "input" && nodeName !== "option") {
                migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
            }
            elem.value = value;
        }
    };
    var matched, browser, oldInit = jQuery.fn.init,
        oldParseJSON = jQuery.parseJSON,
        rspaceAngle = /^\s*</,
        rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    jQuery.fn.init = function(selector, context, rootjQuery) {
        var match, ret;
        if (selector && typeof selector === "string" && !jQuery.isPlainObject(context) && (match = rquickExpr.exec(jQuery.trim(selector))) && match[0]) {
            if (!rspaceAngle.test(selector)) {
                migrateWarn("$(html) HTML strings must start with '<' character");
            }
            if (match[3]) {
                migrateWarn("$(html) HTML text after last tag is ignored");
            }
            if (match[0].charAt(0) === "#") {
                migrateWarn("HTML string cannot start with a '#' character");
                jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
            }
            if (context && context.context) {
                context = context.context;
            }
            if (jQuery.parseHTML) {
                return oldInit.call(this, jQuery.parseHTML(match[2], context && context.ownerDocument || context || document, true), context, rootjQuery);
            }
        }
        if (selector === "#") {
            migrateWarn("jQuery( '#' ) is not a valid selector");
            selector = [];
        }
        ret = oldInit.apply(this, arguments);
        if (selector && selector.selector !== undefined) {
            ret.selector = selector.selector;
            ret.context = selector.context;
        } else {
            ret.selector = typeof selector === "string" ? selector : "";
            if (selector) {
                ret.context = selector.nodeType ? selector : context || document;
            }
        }
        return ret;
    };
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.parseJSON = function(json) {
        if (!json) {
            migrateWarn("jQuery.parseJSON requires a valid JSON string");
            return null;
        }
        return oldParseJSON.apply(this, arguments);
    };
    jQuery.uaMatch = function(ua) {
        ua = ua.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };
    if (!jQuery.browser) {
        matched = jQuery.uaMatch(navigator.userAgent);
        browser = {};
        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version;
        }
        if (browser.chrome) {
            browser.webkit = true;
        } else if (browser.webkit) {
            browser.safari = true;
        }
        jQuery.browser = browser;
    }
    migrateWarnProp(jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated");
    jQuery.boxModel = jQuery.support.boxModel = (document.compatMode === "CSS1Compat");
    migrateWarnProp(jQuery, "boxModel", jQuery.boxModel, "jQuery.boxModel is deprecated");
    migrateWarnProp(jQuery.support, "boxModel", jQuery.support.boxModel, "jQuery.support.boxModel is deprecated");
    jQuery.sub = function() {
        function jQuerySub(selector, context) {
            return new jQuerySub.fn.init(selector, context);
        }
        jQuery.extend(true, jQuerySub, this);
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init(selector, context) {
            var instance = jQuery.fn.init.call(this, selector, context, rootjQuerySub);
            return instance instanceof jQuerySub ? instance : jQuerySub(instance);
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        migrateWarn("jQuery.sub() is deprecated");
        return jQuerySub;
    };
    jQuery.fn.size = function() {
        migrateWarn("jQuery.fn.size() is deprecated; use the .length property");
        return this.length;
    };
    var internalSwapCall = false;
    if (jQuery.swap) {
        jQuery.each(["height", "width", "reliableMarginRight"], function(_, name) {
            var oldHook = jQuery.cssHooks[name] && jQuery.cssHooks[name].get;
            if (oldHook) {
                jQuery.cssHooks[name].get = function() {
                    var ret;
                    internalSwapCall = true;
                    ret = oldHook.apply(this, arguments);
                    internalSwapCall = false;
                    return ret;
                };
            }
        });
    }
    jQuery.swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        if (!internalSwapCall) {
            migrateWarn("jQuery.swap() is undocumented and deprecated");
        }
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.apply(elem, args || []);
        for (name in options) {
            elem.style[name] = old[name];
        }
        return ret;
    };
    jQuery.ajaxSetup({
        converters: {
            "text json": jQuery.parseJSON
        }
    });
    var oldFnData = jQuery.fn.data;
    jQuery.fn.data = function(name) {
        var ret, evt, elem = this[0];
        if (elem && name === "events" && arguments.length === 1) {
            ret = jQuery.data(elem, name);
            evt = jQuery._data(elem, name);
            if ((ret === undefined || ret === evt) && evt !== undefined) {
                migrateWarn("Use of jQuery.fn.data('events') is deprecated");
                return evt;
            }
        }
        return oldFnData.apply(this, arguments);
    };
    var rscriptType = /\/(java|ecma)script/i;
    if (!jQuery.clean) {
        jQuery.clean = function(elems, context, fragment, scripts) {
            context = context || document;
            context = !context.nodeType && context[0] || context;
            context = context.ownerDocument || context;
            migrateWarn("jQuery.clean() is deprecated");
            var i, elem, handleScript, jsTags, ret = [];
            jQuery.merge(ret, jQuery.buildFragment(elems, context).childNodes);
            if (fragment) {
                handleScript = function(elem) {
                    if (!elem.type || rscriptType.test(elem.type)) {
                        return scripts ? scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) : fragment.appendChild(elem);
                    }
                };
                for (i = 0;
                    (elem = ret[i]) != null; i++) {
                    if (!(jQuery.nodeName(elem, "script") && handleScript(elem))) {
                        fragment.appendChild(elem);
                        if (typeof elem.getElementsByTagName !== "undefined") {
                            jsTags = jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript);
                            ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
                            i += jsTags.length;
                        }
                    }
                }
            }
            return ret;
        };
    }
    var eventAdd = jQuery.event.add,
        eventRemove = jQuery.event.remove,
        eventTrigger = jQuery.event.trigger,
        oldToggle = jQuery.fn.toggle,
        oldLive = jQuery.fn.live,
        oldDie = jQuery.fn.die,
        oldLoad = jQuery.fn.load,
        ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        rajaxEvent = new RegExp("\\b(?:" + ajaxEvents + ")\\b"),
        rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
        hoverHack = function(events) {
            if (typeof(events) !== "string" || jQuery.event.special.hover) {
                return events;
            }
            if (rhoverHack.test(events)) {
                migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
            }
            return events && events.replace(rhoverHack, "mouseenter$1 mouseleave$1");
        };
    if (jQuery.event.props && jQuery.event.props[0] !== "attrChange") {
        jQuery.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
    }
    if (jQuery.event.dispatch) {
        migrateWarnProp(jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    }
    jQuery.event.add = function(elem, types, handler, data, selector) {
        if (elem !== document && rajaxEvent.test(types)) {
            migrateWarn("AJAX events should be attached to document: " + types);
        }
        eventAdd.call(this, elem, hoverHack(types || ""), handler, data, selector);
    };
    jQuery.event.remove = function(elem, types, handler, selector, mappedTypes) {
        eventRemove.call(this, elem, hoverHack(types) || "", handler, selector, mappedTypes);
    };
    jQuery.each(["load", "unload", "error"], function(_, name) {
        jQuery.fn[name] = function() {
            var args = Array.prototype.slice.call(arguments, 0);
            migrateWarn("jQuery.fn." + name + "() is deprecated");
            if (name === "load" && typeof arguments[0] === "string") {
                return oldLoad.apply(this, arguments);
            }
            args.splice(0, 0, name);
            if (arguments.length) {
                return this.bind.apply(this, args);
            }
            this.triggerHandler.apply(this, args);
            return this;
        };
    });
    jQuery.fn.toggle = function(fn, fn2) {
        if (!jQuery.isFunction(fn) || !jQuery.isFunction(fn2)) {
            return oldToggle.apply(this, arguments);
        }
        migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");
        var args = arguments,
            guid = fn.guid || jQuery.guid++,
            i = 0,
            toggler = function(event) {
                var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;
                jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1);
                event.preventDefault();
                return args[lastToggle].apply(this, arguments) || false;
            };
        toggler.guid = guid;
        while (i < args.length) {
            args[i++].guid = guid;
        }
        return this.click(toggler);
    };
    jQuery.fn.live = function(types, data, fn) {
        migrateWarn("jQuery.fn.live() is deprecated");
        if (oldLive) {
            return oldLive.apply(this, arguments);
        }
        jQuery(this.context).on(types, this.selector, data, fn);
        return this;
    };
    jQuery.fn.die = function(types, fn) {
        migrateWarn("jQuery.fn.die() is deprecated");
        if (oldDie) {
            return oldDie.apply(this, arguments);
        }
        jQuery(this.context).off(types, this.selector || "**", fn);
        return this;
    };
    jQuery.event.trigger = function(event, data, elem, onlyHandlers) {
        if (!elem && !rajaxEvent.test(event)) {
            migrateWarn("Global events are undocumented and deprecated");
        }
        return eventTrigger.call(this, event, data, elem || document, onlyHandlers);
    };
    jQuery.each(ajaxEvents.split("|"), function(_, name) {
        jQuery.event.special[name] = {
            setup: function() {
                var elem = this;
                if (elem !== document) {
                    jQuery.event.add(document, name + "." + jQuery.guid, function() {
                        jQuery.event.trigger(name, Array.prototype.slice.call(arguments, 1), elem, true);
                    });
                    jQuery._data(this, name, jQuery.guid++);
                }
                return false;
            },
            teardown: function() {
                if (this !== document) {
                    jQuery.event.remove(document, name + "." + jQuery._data(this, name));
                }
                return false;
            }
        };
    });
    jQuery.event.special.ready = {
        setup: function() {
            migrateWarn("'ready' event is deprecated");
        }
    };
    var oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack,
        oldFind = jQuery.fn.find;
    jQuery.fn.andSelf = function() {
        migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return oldSelf.apply(this, arguments);
    };
    jQuery.fn.find = function(selector) {
        var ret = oldFind.apply(this, arguments);
        ret.context = this.context;
        ret.selector = this.selector ? this.selector + " " + selector : selector;
        return ret;
    };
    if (jQuery.Callbacks) {
        var oldDeferred = jQuery.Deferred,
            tuples = [
                ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), "resolved"],
                ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), "rejected"],
                ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory")]
            ];
        jQuery.Deferred = function(func) {
            var deferred = oldDeferred(),
                promise = deferred.promise();
            deferred.pipe = promise.pipe = function() {
                var fns = arguments;
                migrateWarn("deferred.pipe() is deprecated");
                return jQuery.Deferred(function(newDefer) {
                    jQuery.each(tuples, function(i, tuple) {
                        var fn = jQuery.isFunction(fns[i]) && fns[i];
                        deferred[tuple[1]](function() {
                            var returned = fn && fn.apply(this, arguments);
                            if (returned && jQuery.isFunction(returned.promise)) {
                                returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                            } else {
                                newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                            }
                        });
                    });
                    fns = null;
                }).promise();
            };
            deferred.isResolved = function() {
                migrateWarn("deferred.isResolved is deprecated");
                return deferred.state() === "resolved";
            };
            deferred.isRejected = function() {
                migrateWarn("deferred.isRejected is deprecated");
                return deferred.state() === "rejected";
            };
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        };
    }
})(jQuery, window);

// /presentation/plugins/core/jquery.cookie.js //

jQuery.cookie = function(key, value, options) {
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);
        if (value === null) {
            options.expires = -1;
        }
        if (typeof options.expires === 'number') {
            var days = options.expires,
                t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        return (document.cookie = [encodeURIComponent(key), '=', options.raw ? String(value) : encodeURIComponent(String(value)), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
    }
    options = value || {};
    var result, decode = options.raw ? function(s) {
        return s;
    } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

// /presentation/plugins/core/modernizr-3.3.1.min.js //

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, o, i, s;
        for (var c in b)
            if (b.hasOwnProperty(c)) {
                if (e = [], t = b[c], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), T.push((a ? "" : "no-") + s.join("-"))
            }
    }

    function o(e) {
        var t = w.className,
            n = Modernizr._config.classPrefix || "";
        if (S && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), S ? w.className.baseVal = t : w.className = t)
    }

    function i(e, t) {
        if ("object" == typeof e)
            for (var n in e) _(e, n) && i(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                a = Modernizr[r[0]];
            if (2 == r.length && (a = a[r[1]]), "undefined" != typeof a) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : S ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function c() {
        var e = t.body;
        return e || (e = s(S ? "svg" : "body"), e.fake = !0), e
    }

    function l(e, n, r, a) {
        var o, i, l, d, u = "modernizr",
            f = s("div"),
            p = c();
        if (parseInt(r, 10))
            for (; r--;) l = s("div"), l.id = a ? a[r] : u + (r + 1), f.appendChild(l);
        return o = s("style"), o.type = "text/css", o.id = "s" + u, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = w.style.overflow, w.style.overflow = "hidden", w.appendChild(p)), i = n(f, e), p.fake ? (p.parentNode.removeChild(p), w.style.overflow = d, w.offsetHeight) : f.parentNode.removeChild(f), !!i
    }

    function d(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function f(t, r) {
        var a = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(u(t[a]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; a--;) o.push("(" + u(t[a]) + ":" + r + ")");
            return o = o.join(" or "), l("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function p(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function m(e, t, a, o) {
        function i() {
            l && (delete $.style, delete $.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(a, "undefined")) {
            var c = f(e, a);
            if (!r(c, "undefined")) return c
        }
        for (var l, u, m, g, h, v = ["modernizr", "tspan"]; !$.style;) l = !0, $.modElem = s(v.shift()), $.style = $.modElem.style;
        for (m = e.length, u = 0; m > u; u++)
            if (g = e[u], h = $.style[g], d(g, "-") && (g = p(g)), $.style[g] !== n) {
                if (o || r(a, "undefined")) return i(), "pfx" == t ? g : !0;
                try {
                    $.style[g] = a
                } catch (y) {}
                if ($.style[g] != h) return i(), "pfx" == t ? g : !0
            }
        return i(), !1
    }

    function g(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function h(e, t, n) {
        var a;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (a = t[e[o]], r(a, "function") ? g(a, n || t) : a);
        return !1
    }

    function v(e, t, n, a, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + z.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? m(s, t, a, o) : (s = (e + " " + E.join(i + " ") + i).split(" "), h(s, t, n))
    }

    function y(e, t, r) {
        return v(e, n, n, t, r)
    }
    var b = [],
        x = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = x, Modernizr = new Modernizr;
    var T = [],
        w = t.documentElement,
        S = "svg" === w.nodeName.toLowerCase(),
        C = "Moz O ms Webkit",
        E = x._config.usePrefixes ? C.toLowerCase().split(" ") : [];
    x._domPrefixes = E;
    var k = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    x._prefixes = k;
    var _;
    ! function() {
        var e = {}.hasOwnProperty;
        _ = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(t, n) {
            return e.call(t, n)
        }
    }(), x._l = {}, x.on = function(e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, x._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function() {
        x.addTest = i
    });
    var P = function() {
        function e(e, t) {
            var a;
            return e ? (t && "string" != typeof t || (t = s(t || "div")), e = "on" + e, a = e in t, !a && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), a = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), a) : !1
        }
        var r = !("onblur" in t.documentElement);
        return e
    }();
    x.hasEvent = P;
    var N = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return l("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    x.mq = N;
    var z = x._config.usePrefixes ? C.split(" ") : [];
    x._cssomPrefixes = z;
    var R = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete R.elem
    });
    var $ = {
        style: R.elem.style
    };
    Modernizr._q.unshift(function() {
        delete $.style
    }), x.testAllProps = v;
    var A = function(t) {
        var r, a = k.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var i = 0; a > i; i++) {
            var s = k[i],
                c = s.toUpperCase() + "_" + r;
            if (c in o) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    x.atRule = A;
    var O = x.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? A(e) : (-1 != e.indexOf("-") && (e = p(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    x.testAllProps = y;
    var L = x.testProp = function(e, t, r) {
            return m([e], n, t, r)
        },
        M = x.testStyles = l;
    S || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = b.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = b.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), b.elements = n + " " + e, l(t)
        }

        function o(e) {
            var t = y[e[h]];
            return t || (t = {}, v++, e[h] = v, y[v] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), u) return n.createElement(e);
            r || (r = o(n));
            var a;
            return a = r.cache[e] ? r.cache[e].cloneNode() : g.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || o(e);
            for (var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++) a.createElement(s[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return b.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(b, t.frag)
        }

        function l(e) {
            e || (e = t);
            var r = o(e);
            return !b.shivCSS || d || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || c(e, r), e
        }
        var d, u, f = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            g = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            v = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", d = "hidden" in e, u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                d = !0, u = !0
            }
        }();
        var b = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = b, l(t), "object" == typeof module && module.exports && (module.exports = b)
    }("undefined" != typeof e ? e : this, t), Modernizr.addTest("applicationcache", "applicationCache" in e), Modernizr.addTest("audio", function() {
        var e = s("audio"),
            t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), t.opus = e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (n) {}
        return t
    }), Modernizr.addTest("canvas", function() {
        var e = s("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function() {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof s("canvas").getContext("2d").fillText
    }), Modernizr.addTest("geolocation", "geolocation" in navigator), Modernizr.addTest("hashchange", function() {
        return P("hashchange", e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7
    }), Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") ? e.history && "pushState" in e.history : !1
    });
    var B;
    try {
        B = O("indexedDB", e)
    } catch (j) {}
    Modernizr.addTest("indexeddb", !!B), B && Modernizr.addTest("indexeddb.deletedatabase", "deleteDatabase" in B);
    var F = s("input"),
        I = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        D = {};
    Modernizr.input = function(t) {
        for (var n = 0, r = t.length; r > n; n++) D[t[n]] = !!(t[n] in F);
        return D.list && (D.list = !(!s("datalist") || !e.HTMLDataListElement)), D
    }(I);
    var W = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        q = {};
    Modernizr.inputtypes = function(e) {
            for (var r, a, o, i = e.length, s = "1)", c = 0; i > c; c++) F.setAttribute("type", r = e[c]), o = "text" !== F.type && "style" in F, o && (F.value = s, F.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && F.style.WebkitAppearance !== n ? (w.appendChild(F), a = t.defaultView, o = a.getComputedStyle && "textfield" !== a.getComputedStyle(F, null).WebkitAppearance && 0 !== F.offsetHeight, w.removeChild(F)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? F.checkValidity && F.checkValidity() === !1 : F.value != s)), q[e[c]] = !!o;
            return q
        }(W), Modernizr.addTest("postmessage", "postMessage" in e), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("video", function() {
            var e = s("video"),
                t = !1;
            try {
                (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
            } catch (n) {}
            return t
        }), Modernizr.addTest("webgl", function() {
            var t = s("canvas"),
                n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
            return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
        }), Modernizr.addTest("websockets", "WebSocket" in e && 2 === e.WebSocket.CLOSING), Modernizr.addTest("cssanimations", y("animationName", "a", !0)), Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)), Modernizr.addTest("borderimage", y("borderImage", "url() 1", !0)), Modernizr.addTest("borderradius", y("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", y("boxShadow", "1px 1px", !0)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var e = !1,
                    t = y("columnCount");
                try {
                    (e = !!t) && (e = new Boolean(e))
                } catch (n) {}
                return e
            });
            for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
        }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0));
    var V = function() {
        var e = navigator.userAgent,
            t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
            n = e.match(/w(eb)?osbrowser/gi),
            r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9,
            a = 533 > t && e.match(/android/gi);
        return n || a || r
    }();
    V ? Modernizr.addTest("fontface", !1) : M('@font-face {font-family:"font";src:url("https://")}', function(e, n) {
        var r = t.getElementById("smodernizr"),
            a = r.sheet || r.styleSheet,
            o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "",
            i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i)
    }), M('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7)
    }), Modernizr.addTest("cssgradients", function() {
        for (var e, t = "background-image:", n = "gradient(linear,left top,right bottom,from(#9f9),to(white));", r = "", a = 0, o = k.length - 1; o > a; a++) e = 0 === a ? "to " : "", r += t + k[a] + "linear-gradient(" + e + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
        var i = s("a"),
            c = i.style;
        return c.cssText = r, ("" + c.backgroundImage).indexOf("gradient") > -1
    }), Modernizr.addTest("hsla", function() {
        var e = s("a").style;
        return e.cssText = "background-color:hsla(120,40%,100%,.5)", d(e.backgroundColor, "rgba") || d(e.backgroundColor, "hsla")
    }), Modernizr.addTest("multiplebgs", function() {
        var e = s("a").style;
        return e.cssText = "background:url(https://),url(https://),red url(https://)", /(url\s*\(.*?){3}/.test(e.background)
    }), Modernizr.addTest("opacity", function() {
        var e = s("a").style;
        return e.cssText = k.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    }), Modernizr.addTest("cssreflections", y("boxReflect", "above", !0)), Modernizr.addTest("rgba", function() {
        var e = s("a").style;
        return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1
    }), Modernizr.addTest("textshadow", L("textShadow", "1px 1px")), Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
    });
    var H = "CSS" in e && "supports" in e.CSS,
        U = "supportsCSS" in e;
    Modernizr.addTest("supports", H || U), Modernizr.addTest("csstransforms3d", function() {
        var e = !!y("perspective", "1px", !0),
            t = Modernizr._config.usePrefixes;
        if (e && (!t || "webkitPerspective" in w.style)) {
            var n, r = "#modernizr{width:0;height:0}";
            Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", M(r + n, function(t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight
            })
        }
        return e
    }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }), Modernizr.addTest("websqldatabase", "openDatabase" in e);
    var G = {}.toString;
    Modernizr.addTest("svgclippaths", function() {
        return !!t.createElementNS && /SVGClipPath/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
    }), Modernizr.addTest("inlinesvg", function() {
        var e = s("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    }), Modernizr.addTest("smil", function() {
        return !!t.createElementNS && /SVGAnimate/.test(G.call(t.createElementNS("http://www.w3.org/2000/svg", "animate")))
    }), Modernizr.addTest("webworkers", "Worker" in e), a(), o(T), delete x.addTest, delete x.addAsyncTest;
    for (var J = 0; J < Modernizr._q.length; J++) Modernizr._q[J]();
    e.Modernizr = Modernizr
}(window, document);

// /presentation/js/sidebar.js //

$(document).ready(function() {
    var sidebar_langs_loaded = false;
    $('#js_languages_loading').hide();
    if ($('#js_sidebar_languages_container').hasClass("js_default_show")) {
        if (!sidebar_langs_loaded) {
            $('#js_languages_loading').show();
            sidebar_langs_loaded = true;
            get_languages();
        }
    }
    $('#js_sidebar_languages_button').click(function() {
        if (!sidebar_langs_loaded) {
            $('#js_languages_loading').show();
            sidebar_langs_loaded = true;
            get_languages();
        }
    });
});

function get_languages() {
    $.get('/ajaxactions/sidebar_languages?data=' + $('#js_sidebar_data').attr('data'), function(data) {
        var index = 0;
        $('#js_languages_loading').hide();
        html_to_add = '<ul>';
        if (data == 'none') {
            html_to_add += '<li>No languages to show</li>';
        } else {
            var language_info = jQuery.parseJSON(data);
            $.each(language_info.filter, function(i, info) {
                html_to_add += '<li class="checked"><a href="' + info.url + '" ><span class="remove_icon">x</span>' + info.name + '</a></li>';
                index++;
            });
            $.each(language_info.same_count, function(i, info) {
                html_to_add += '<li>&#x2713;' + info.name + '</li>'
                index++;
                if (index >= Math.round(language_info.lang_count / 2)) {
                    html_to_add += '</ul>';
                    $('#js_sidebar_languages_list').append(html_to_add);
                    html_to_add = '<ul>';
                    index = 0;
                }
            });
            $.each(language_info.other, function(i, info) {
                html_to_add += '<li><span>' + info.count + '</span><a href="' + info.url + '">' + info.name + '</a></li>'
                index++;
                if (index >= Math.round(language_info.lang_count / 2)) {
                    html_to_add += '</ul>';
                    $('#js_sidebar_languages_list').append(html_to_add);
                    html_to_add = '<ul>';
                    index = 0;
                }
            });
        }
        $('#js_sidebar_languages_list').append(html_to_add);
    });
}

// /presentation/plugins/fileupload/jquery.ui.widget.js //

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function($, undefined) {
    var uuid = 0,
        slice = Array.prototype.slice,
        _cleanData = $.cleanData;
    $.cleanData = function(elems) {
        for (var i = 0, elem;
            (elem = elems[i]) != null; i++) {
            try {
                $(elem).triggerHandler("remove");
            } catch (e) {}
        }
        _cleanData(elems);
    };
    $.widget = function(name, base, prototype) {
        var fullName, existingConstructor, constructor, basePrototype, proxiedPrototype = {},
            namespace = name.split(".")[0];
        name = name.split(".")[1];
        fullName = namespace + "-" + name;
        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }
        $.expr[":"][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName);
        };
        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function(options, element) {
            if (!this._createWidget) {
                return new constructor(options, element);
            }
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };
        $.extend(constructor, existingConstructor, {
            version: prototype.version,
            _proto: $.extend({}, prototype),
            _childConstructors: []
        });
        basePrototype = new base();
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function(prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = (function() {
                var _super = function() {
                        return base.prototype[prop].apply(this, arguments);
                    },
                    _superApply = function(args) {
                        return base.prototype[prop].apply(this, args);
                    };
                return function() {
                    var __super = this._super,
                        __superApply = this._superApply,
                        returnValue;
                    this._super = _super;
                    this._superApply = _superApply;
                    returnValue = value.apply(this, arguments);
                    this._super = __super;
                    this._superApply = __superApply;
                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend(basePrototype, {
            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function(i, child) {
                var childPrototype = child.prototype;
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
            });
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }
        $.widget.bridge(name, constructor);
    };
    $.widget.extend = function(target) {
        var input = slice.call(arguments, 1),
            inputIndex = 0,
            inputLength = input.length,
            key, value;
        for (; inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value);
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };
    $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
            var isMethodCall = typeof options === "string",
                args = slice.call(arguments, 1),
                returnValue = this;
            options = !isMethodCall && args.length ? $.widget.extend.apply(null, [options].concat(args)) : options;
            if (isMethodCall) {
                this.each(function() {
                    var methodValue, instance = $.data(this, fullName);
                    if (!instance) {
                        return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
                    }
                    if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                        return $.error("no such method '" + options + "' for " + name + " widget instance");
                    }
                    methodValue = instance[options].apply(instance, args);
                    if (methodValue !== instance && methodValue !== undefined) {
                        returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                        return false;
                    }
                });
            } else {
                this.each(function() {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {})._init();
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }
            return returnValue;
        };
    };
    $.Widget = function() {};
    $.Widget._childConstructors = [];
    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ? element.ownerDocument : element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: $.noop,
        widget: function() {
            return this.element;
        },
        option: function(key, value) {
            var options = key,
                parts, curOption, i;
            if (arguments.length === 0) {
                return $.widget.extend({}, this.options);
            }
            if (typeof key === "string") {
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (value === undefined) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (value === undefined) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }
            this._setOptions(options);
            return this;
        },
        _setOptions: function(options) {
            var key;
            for (key in options) {
                this._setOption(key, options[key]);
            }
            return this;
        },
        _setOption: function(key, value) {
            this.options[key] = value;
            if (key === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!value).attr("aria-disabled", value);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus");
            }
            return this;
        },
        enable: function() {
            return this._setOption("disabled", false);
        },
        disable: function() {
            return this._setOption("disabled", true);
        },
        _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement, instance = this;
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }
            $.each(handlers, function(event, handler) {
                function handlerProxy() {
                    if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                }
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
                }
                var match = event.match(/^(\w+)\s*(.*)$/),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                if (selector) {
                    delegateElement.delegate(selector, eventName, handlerProxy);
                } else {
                    element.bind(eventName, handlerProxy);
                }
            });
        },
        _off: function(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            element.unbind(eventName).undelegate(eventName);
        },
        _delay: function(handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },
        _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function(event) {
                    $(event.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(event) {
                    $(event.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function(event) {
                    $(event.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(event) {
                    $(event.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(type, event, data) {
            var prop, orig, callback = this.options[type];
            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
            event.target = this.element[0];
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }
            this.element.trigger(event, data);
            return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
        }
    };
    $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(method, defaultEffect) {
        $.Widget.prototype["_" + method] = function(element, options, callback) {
            if (typeof options === "string") {
                options = {
                    effect: options
                };
            }
            var hasOptions, effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
            options = options || {};
            if (typeof options === "number") {
                options = {
                    duration: options
                };
            }
            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;
            if (options.delay) {
                element.delay(options.delay);
            }
            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function(next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });
}));

// /presentation/plugins/fileupload/jquery.iframe-transport.js //

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(window.jQuery);
    }
}(function($) {
    'use strict';
    var counter = 0;
    $.ajaxTransport('iframe', function(options) {
        if (options.async) {
            var form, iframe, addParamChar;
            return {
                send: function(_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    iframe = $('<iframe src="javascript:false;" name="iframe-transport-' +
                        (counter += 1) + '"></iframe>').bind('load', function() {
                        var fileInputClones, paramNames = $.isArray(options.paramName) ? options.paramName : [options.paramName];
                        iframe.unbind('load').bind('load', function() {
                            var response;
                            try {
                                response = iframe.contents();
                                if (!response.length || !response[0].firstChild) {
                                    throw new Error();
                                }
                            } catch (e) {
                                response = undefined;
                            }
                            completeCallback(200, 'success', {
                                'iframe': response
                            });
                            $('<iframe src="javascript:false;"></iframe>').appendTo(form);
                            form.remove();
                        });
                        form.prop('target', iframe.prop('name')).prop('action', options.url).prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function(index, field) {
                                $('<input type="hidden"/>').prop('name', field.name).val(field.value).appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length && options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            options.fileInput.after(function(index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function(index) {
                                    $(this).prop('name', paramNames[index] || options.paramName);
                                });
                            }
                            form.append(options.fileInput).prop('enctype', 'multipart/form-data').prop('encoding', 'multipart/form-data');
                        }
                        form.submit();
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function(index, input) {
                                var clone = $(fileInputClones[index]);
                                $(input).prop('name', clone.prop('name'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function() {
                    if (iframe) {
                        iframe.unbind('load').prop('src', 'javascript'.concat(':false;'));
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });
    $.ajaxSetup({
        converters: {
            'iframe text': function(iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function(iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function(iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe script': function(iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });
}));

// /presentation/plugins/fileupload/jquery.fileupload-5.42.1.js //

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'jquery.ui.widget'], factory);
    } else {
        factory(window.jQuery);
    }
}(function($) {
    'use strict';
    $.support.fileInput = !(new RegExp('(Android (1\\.[0156]|2\\.[01]))' + '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' + '|(w(eb)?OSBrowser)|(webOS)' + '|(Kindle/(1\\.0|2\\.[05]|3\\.0))').test(window.navigator.userAgent) || $('<input type="file">').prop('disabled'));
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;
    $.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function(e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 && this._trigger(type, $.Event(type, {
                    delegatedEvent: e
                })) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }
    $.widget('blueimp.fileupload', {
        options: {
            dropZone: $(document),
            pasteZone: undefined,
            fileInput: undefined,
            replaceFileInput: true,
            paramName: undefined,
            singleFileUploads: true,
            limitMultiFileUploads: undefined,
            limitMultiFileUploadSize: undefined,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: false,
            limitConcurrentUploads: undefined,
            forceIframeTransport: false,
            redirect: undefined,
            redirectParamName: undefined,
            postMessage: undefined,
            multipart: true,
            maxChunkSize: undefined,
            uploadedBytes: undefined,
            recalculateProgress: true,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: true,
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },
            i18n: function(message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function(key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },
            formData: function(form) {
                return form.serializeArray();
            },
            add: function(e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false && $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function() {
                        data.submit();
                    });
                }
            },
            processData: false,
            contentType: false,
            cache: false
        },
        _specialOptions: ['fileInput', 'dropZone', 'pasteZone', 'multipart', 'forceIframeTransport'],
        _blobSlice: $.support.blobSlice && function() {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },
        _BitrateTimer: function() {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function(now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },
        _isXHRUpload: function(options) {
            return !options.forceIframeTransport && ((!options.multipart && $.support.xhrFileUpload) || $.support.xhrFormDataFileUpload);
        },
        _getFormData: function(options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function(name, value) {
                    formData.push({
                        name: name,
                        value: value
                    });
                });
                return formData;
            }
            return [];
        },
        _getTotal: function(files) {
            var total = 0;
            $.each(files, function(index, file) {
                total += file.size || 1;
            });
            return total;
        },
        _initProgressObject: function(obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },
        _initResponseObject: function(obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },
        _onProgress: function(e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval && (now - data._time < data.progressInterval) && e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(e.loaded / e.total * (data.chunkSize || data._progress.total)) + (data.uploadedBytes || 0);
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(now, this._progress.loaded, data.bitrateInterval);
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(now, loaded, data.bitrateInterval);
                this._trigger('progress', $.Event('progress', {
                    delegatedEvent: e
                }), data);
                this._trigger('progressall', $.Event('progressall', {
                    delegatedEvent: e
                }), this._progress);
            }
        },
        _initProgressListener: function(options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function(e) {
                    var oe = e.originalEvent;
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function() {
                    return xhr;
                };
            }
        },
        _isInstanceOf: function(type, obj) {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },
        _initXHRData: function(options) {
            var that = this,
                formData, file = options.files[0],
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ? options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function(index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' && options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function(index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function(index, file) {
                            if (that._isInstanceOf('File', file) || that._isInstanceOf('Blob', file)) {
                                formData.append(($.type(options.paramName) === 'array' && options.paramName[index]) || paramName, file, file.uploadName || file.name);
                            }
                        });
                    }
                }
                options.data = formData;
            }
            options.blob = null;
        },
        _initIframeSettings: function(options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            options.dataType = 'iframe ' + (options.dataType || '');
            options.formData = this._getFormData(options);
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },
        _initDataSettings: function(options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },
        _getParamName: function(options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function() {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },
        _initFormSettings: function(options) {
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            options.type = (options.type || ($.type(options.form.prop('method')) === 'string' && options.form.prop('method')) || '').toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' && options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },
        _getAJAXSettings: function(data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },
        _getDeferredState: function(deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },
        _enhancePromise: function(promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },
        _getXHRPromise: function(resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },
        _addConvenienceMethods: function(e, data) {
            var that = this,
                getPromise = function(args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function(resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue = (this._processQueue || getPromise([this])).pipe(function() {
                        if (data.errorThrown) {
                            return $.Deferred().rejectWith(that, [data]).promise();
                        }
                        return getPromise(arguments);
                    }).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function() {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR = (that._trigger('submit', $.Event('submit', {
                        delegatedEvent: e
                    }), this) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function() {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function() {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function() {
                return !this.jqXHR && this._processQueue && that._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function() {
                return this._progress;
            };
            data.response = function() {
                return this._response;
            };
        },
        _getUploadedBytes: function(jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },
        _chunkedUpload: function(options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR, upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) || options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(false, options.context, [null, 'error', file.error]);
            }
            upload = function() {
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(file, ub, ub + mcs, file.type);
                o.chunkSize = o.blob.size;
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                that._initXHRData(o);
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) || that._getXHRPromise(false, o.context)).done(function(result, textStatus, jqXHR) {
                    ub = that._getUploadedBytes(jqXHR) || (ub + o.chunkSize);
                    if (currentLoaded + o.chunkSize - o._progress.loaded) {
                        that._onProgress($.Event('progress', {
                            lengthComputable: true,
                            loaded: ub - o.uploadedBytes,
                            total: ub - o.uploadedBytes
                        }), o);
                    }
                    options.uploadedBytes = o.uploadedBytes = ub;
                    o.result = result;
                    o.textStatus = textStatus;
                    o.jqXHR = jqXHR;
                    that._trigger('chunkdone', null, o);
                    that._trigger('chunkalways', null, o);
                    if (ub < fs) {
                        upload();
                    } else {
                        dfd.resolveWith(o.context, [result, textStatus, jqXHR]);
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    o.jqXHR = jqXHR;
                    o.textStatus = textStatus;
                    o.errorThrown = errorThrown;
                    that._trigger('chunkfail', null, o);
                    that._trigger('chunkalways', null, o);
                    dfd.rejectWith(o.context, [jqXHR, textStatus, errorThrown]);
                });
            };
            this._enhancePromise(promise);
            promise.abort = function() {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },
        _beforeSend: function(e, data) {
            if (this._active === 0) {
                this._trigger('start');
                this._bitrateTimer = new this._BitrateTimer();
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },
        _onDone: function(result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },
        _onFail: function(jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },
        _onAlways: function(jqXHRorResult, textStatus, jqXHRorError, options) {
            this._trigger('always', null, options);
        },
        _onSend: function(e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR, aborted, slot, pipe, options = that._getAJAXSettings(data),
                send = function() {
                    that._sending += 1;
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (((aborted || that._trigger('send', $.Event('send', {
                        delegatedEvent: e
                    }), options) === false) && that._getXHRPromise(false, options.context, aborted)) || that._chunkedUpload(options) || $.ajax(options)).done(function(result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function(jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function(jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(jqXHRorResult, textStatus, jqXHRorError, options);
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads && options.limitConcurrentUploads > that._sending) {
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads || (this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                pipe.abort = function() {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },
        _onAdd: function(e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet, paramNameSlice, fileSet, i, j = 0;
            if (limitSize && (!filesLength || files[0].size === undefined)) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) || !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength || ((batchSize + files[i + 1].size + overhead) > limitSize) || (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function(index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger('add', $.Event('add', {
                    delegatedEvent: e
                }), newData);
                return result;
            });
            return result;
        },
        _replaceFileInput: function(data) {
            var input = data.fileInput,
                inputClone = input.clone(true);
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            input.after(inputClone).detach();
            $.cleanData(input.unbind('remove'));
            this.options.fileInput = this.options.fileInput.map(function(i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },
        _handleFileTreeEntry: function(entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function(e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    dfd.resolve([e]);
                },
                successHandler = function(entries) {
                    that._handleFileTreeEntries(entries, path + entry.name + '/').done(function(files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function() {
                    dirReader.readEntries(function(results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function(file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                dfd.resolve([]);
            }
            return dfd.promise();
        },
        _handleFileTreeEntries: function(entries, path) {
            var that = this;
            return $.when.apply($, $.map(entries, function(entry) {
                return that._handleFileTreeEntry(entry, path);
            })).pipe(function() {
                return Array.prototype.concat.apply([], arguments);
            });
        },
        _getDroppedFiles: function(dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
                return this._handleFileTreeEntries($.map(items, function(item) {
                    var entry;
                    if (item.webkitGetAsEntry) {
                        entry = item.webkitGetAsEntry();
                        if (entry) {
                            entry._file = item.getAsFile();
                        }
                        return entry;
                    }
                    return item.getAsEntry();
                }));
            }
            return $.Deferred().resolve($.makeArray(dataTransfer.files)).promise();
        },
        _getSingleFileInputFiles: function(fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') || fileInput.prop('entries'),
                files, value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                files = [{
                    name: value.replace(/^.*\\/, '')
                }];
            } else if (files[0].name === undefined && files[0].fileName) {
                $.each(files, function(index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },
        _getFileInputFiles: function(fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply($, $.map(fileInput, this._getSingleFileInputFiles)).pipe(function() {
                return Array.prototype.concat.apply([], arguments);
            });
        },
        _onChange: function(e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function(files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger('change', $.Event('change', {
                        delegatedEvent: e
                    }), data) !== false) {
                    that._onAdd(e, data);
                }
            });
        },
        _onPaste: function(e) {
            var items = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
                data = {
                    files: []
                };
            if (items && items.length) {
                $.each(items, function(index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger('paste', $.Event('paste', {
                        delegatedEvent: e
                    }), data) !== false) {
                    this._onAdd(e, data);
                }
            }
        },
        _onDrop: function(e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function(files) {
                    data.files = files;
                    if (that._trigger('drop', $.Event('drop', {
                            delegatedEvent: e
                        }), data) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },
        _onDragOver: getDragHandler('dragover'),
        _onDragEnter: getDragHandler('dragenter'),
        _onDragLeave: getDragHandler('dragleave'),
        _initEventHandlers: function() {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    dragenter: this._onDragEnter,
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },
        _setOption: function(key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },
        _initSpecialOptions: function() {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },
        _getRegExp: function(str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },
        _isRegExpOption: function(key, value) {
            return key !== 'url' && $.type(value) === 'string' && /^\/.*\/[igm]{0,3}$/.test(value);
        },
        _initDataAttributes: function() {
            var that = this,
                options = this.options,
                clone = $(this.element[0].cloneNode(false)),
                data = clone.data();
            clone.remove();
            $.each(data, function(key, value) {
                var dataAttributeName = 'data-' +
                    key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                if (clone.attr(dataAttributeName)) {
                    if (that._isRegExpOption(key, value)) {
                        value = that._getRegExp(value);
                    }
                    options[key] = value;
                }
            });
        },
        _create: function() {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },
        active: function() {
            return this._active;
        },
        progress: function() {
            return this._progress;
        },
        add: function(data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function(files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },
        send: function(data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR, aborted;
                    promise.abort = function() {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(function(files) {
                        if (aborted) {
                            return;
                        }
                        if (!files.length) {
                            dfd.reject();
                            return;
                        }
                        data.files = files;
                        jqXHR = that._onSend(null, data);
                        jqXHR.then(function(result, textStatus, jqXHR) {
                            dfd.resolve(result, textStatus, jqXHR);
                        }, function(jqXHR, textStatus, errorThrown) {
                            dfd.reject(jqXHR, textStatus, errorThrown);
                        });
                    });
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }
    });
}));

// /presentation/js/jquery.object2json.js //

$.fn.object2json = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

// /site_tools/js/generator.js //

$(document).ready(function() {
    var show_button = false;
    var font_limit = 12;
    show_empty_queue();
    $('input[name="options_subset"]').click(function() {
        if ($(this).val() == 'advanced') {
            create_subset_preview();
            $('.ff_subset_features').show();
        } else {
            $('.ff_subset_features').hide();
        }
        if ($(this).val() == 'none') {
            $('.ff_subset_ot').hide();
        } else {
            $('.ff_subset_ot').show();
        }
    });
    $('input[name="fix_vertical_metrics"]').click(function() {
        if ($(this).val() != 'C') {
            $('.vertical_metrics_adjustments').hide();
        } else {
            $('.vertical_metrics_adjustments').show();
        }
    });
    if ($('input[name=tt_instructor]').val() == 'keep') {
        $('input[name=emsquare]').prop('disabled', true);
    }
    $('input[name=tt_instructor]').click(function() {
        if ($(this).val() == 'keep') {
            $('input[name=emsquare]').prop('disabled', true);
        } else {
            $('input[name=emsquare]').prop('disabled', false);
        }
    });
    $('.ot_numeral_position').click(function() {
        $('.ot_numeral_position').not(this).attr('checked', false);
    });
    $('.ot_numeral_spacing').click(function() {
        $('.ot_numeral_spacing').not(this).attr('checked', false);
    });
    $('.eot_format').click(function() {
        $('.eot_format').not(this).attr('checked', false);
    });
    $('input[name="mode"]').click(function() {
        if ($(this).val() == "expert") {
            $('.ff_expert').show();
            if ($('#advanced_subsetting').attr('checked') == true) {
                $('.ff_subset_features').show();
            } else {
                $('.ff_subset_features').hide();
            }
            if ($('input[name="fix_vertical_metrics"]:checked').val() != 'C') {
                $('.vertical_metrics_adjustments').hide();
            }
        } else {
            $('.ff_expert').hide();
        }
    })
    $('input[name="subset_custom"]').keyup(function(e) {
        delay(function() {
            create_subset_preview();
        }, 1000);
    });
    $('input[name="subset_custom_range"]').keyup(function(e) {
        delay(function() {
            create_subset_preview();
        }, 1000);
    })
    $('.subset_selection').click(function() {
        delay(function() {
            create_subset_preview();
        }, 1000);
    });
    configure_generator(JSON.parse($.cookie('ffgen_settings')));
    var delay = (function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    function create_subset_preview() {
        $('#ffgen_subset_preview_container').empty();
        var masterarray = [];
        var custom = $('input[name="subset_custom"]').val();
        var customarray = custom.split("");
        len = customarray.length;
        var display_string = '';
        for (var i = 0; i < len; i++) {
            customarray[i] = toUnicode(customarray[i]);
        }
        $.ajax({
            async: false,
            type: "POST",
            data: $('.subset_selection').serialize(),
            url: '/tools/unicode',
            success: function(data) {
                if (data != "0") {
                    masterarray = masterarray.concat(data);
                }
                masterarray = masterarray.concat(customarray);
                masterarray = $.richArray.unique(masterarray);
                masterarray.sort();
                len = masterarray.length;
                for (var i = 0; i < len; i++) {
                    if (masterarray[i] != '') {
                        $('#ffgen_subset_preview_container').append("<div>&#x" + masterarray[i] + ";</div>");
                    }
                }
            },
            dataType: 'json'
        });
    }

    function toUnicode(theString) {
        var unicodeString = '';
        for (var i = 0; i < theString.length; i++) {
            var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
            while (theUnicode.length < 4) {
                theUnicode = '0' + theUnicode;
            }
            unicodeString += theUnicode;
        }
        return unicodeString;
    }
    $('#ffgen_toolbar').fileupload({
        dropZone: $(this),
        singleFileUploads: false,
        dataType: 'json',
        add: function(e, data) {
            data.url = '/tools/upload';
            var jqXHR = data.submit().success(function(result, textStatus, jqXHR) {}).error(function(jqXHR, textStatus, errorThrown) {}).complete(function(result, textStatus, jqXHR) {})
        },
        start: function(e) {
            $('.progress_fill', this).css('width', 0);
            $('.progress_fill', this).show();
            $('.progress_bar', this).show();
        },
        progressall: function(e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('.progress_fill', this).css('width', progress + '%');
        },
        done: function(e, data) {
            $.each(data.result, function(type, uploadedfiles) {
                if (uploadedfiles.length > 0) {
                    $.each(uploadedfiles, function(i, uploadedfile) {
                        switch (type) {
                            case 'messages':
                                alert(uploadedfile);
                                break;
                            case 'configuration':
                                configure_generator(uploadedfile);
                                break;
                            case 'limit':
                                font_limit = uploadedfile;
                                break;
                            default:
                                insert_font(uploadedfile);
                        }
                    });
                }
            });
            show_button = true;
            check_agreement();
            check_generator_limit();
            $('.progress_bar').hide();
        }
    });

    function check_generator_limit() {
        var row_count = 0;
        var error = false;
        $.each($('#ffgen_filelisting tbody tr'), function(i, row) {
            row_count++;
            if (row_count > font_limit) {
                $(this).remove();
                error = true;
            }
        });
        if (error) {
            alert('You are only permitted to upload ' + font_limit + ' fonts at a time.');
        }
    }

    function insert_font(data) {
        $("#ffgen_filelisting").append("<tr id='" + data.token + "'><td><input type='hidden' name='dirname[]' value='" + data.token + "'><strong>" + data.name + "</strong></td><td>" + data.file_type + "</td><td>" + data.count + " glyphs</td><td>" + data.filesize + "</td><td class='progress'>&nbsp;</td><td class='delete_font'><a href='#" + data.token + "'>x</a></td></tr>");
        show_empty_queue();
    }

    function configure_generator(config) {
        if (config) {
            delete config.agreement;
            if (config.mode == 'easy') {
                $('input[name="mode"][value="easy"]').click();
            } else if (config.mode == 'basic') {
                $('input[name="mode"][value="basic"]').click();
            } else {
                $('input:checkbox').removeAttr('checked');
                $.each(config, function(key, value) {
                    if ($.isArray(value)) {
                        key = key.replace(/(.+)\[\]$/, "$1");
                        $.each(value, function(subkey, subvalue) {
                            set_form_element(key + '[]', subvalue);
                        });
                    }
                    set_form_element(key, value);
                });
            }
        }
    }

    function set_form_element(key, value) {
        $('[name="' + key + '"][value="' + value + '"]:checkbox').prop('checked', 'checked');
        $('[name="' + key + '"][value="' + value + '"]:radio').click();
        $('input[name="' + key + '"][type="text"]').val(value);
    }

    function show_empty_queue() {
        if ($('#ffgen_filelisting tr').length == 0) {
            $('#ffgen_filelisting').empty().append("<tr id='queuemsg'><td>You currently have no fonts uploaded.</td></tr>");
        } else {
            $('#queuemsg').remove();
        }
    }
    $('input[name="agreement"]').click(function() {
        check_agreement();
    })

    function check_agreement() {
        if ($('input[name="agreement"]').prop('checked')) {
            $('input[name="agreement"]').parents('span').removeClass('red');
            if (show_button) {
                $('#ffgen_downloadbtn').show();
            }
        } else {
            $('#ffgen_downloadbtn').hide();
            $('input[name="agreement"]').parents('span').addClass('red');
        }
    }
    $('#ffgen_filisting_container').on("click", ".delete_font a", function() {
        var obj = $(this);
        $.get(obj.attr('href'), function(data) {
            if (data != "0") {
                if ($('#ffgen_filelisting tr').length == 1) {
                    $('#ffgen_downloadbtn').hide();
                    show_button = false;
                }
                obj.parents('tr').remove();
                show_empty_queue();
            }
        });
        return false;
    });
    $('#ffgen_downloadbtn').click(function() {
        $('#ffgen_progressindicator').show();
        $(this).fadeTo(500, .5);
        $(this).attr("disabled", true);
        remember_settings();
        generate_fonts();
        return false;
    });

    function generate_fonts() {
        var row_count = $('#ffgen_filelisting tr').length;
        $('#ffgen_filelisting tr').removeClass('completed_background');
        if (row_count > 0) {
            $('#ffgen_filelisting tr').each(function(index) {
                var form_data = $('#ffgen_form').serialize();
                form_data = form_data + "&id=" + $(this).attr('id');
                $(this).addClass('progress_background');
                jQuery.ajax({
                    url: '/tools/generate',
                    data: form_data,
                    dataType: 'text',
                    type: 'POST',
                    async: true,
                    error: function(data, status) {
                        this_row.removeClass('progress_background');
                    }
                });
                poll($(this).attr('id'));
            });
        }
    }

    function poll(id) {
        setTimeout(function() {
            $.ajax({
                url: '/tools/progress/' + id,
                success: function(data) {
                    if (data && data.progress) {
                        $('#' + id + " .progress").text(data.progress + "%");
                        if (data.progress < 100) {
                            poll(id);
                        } else {
                            $("#" + id).removeClass('progress_background');
                            $("#" + id).addClass('completed_background');
                            is_download_ready(id);
                        }
                    } else {
                        $('#' + id + " .progress").text("0%");
                        poll(id);
                    }
                },
                dataType: "json"
            });
        }, 4000);
    };

    function fontbrain_get(id) {
        jQuery.ajax({
            url: '/tools/fontbrain_get/' + id,
            dataType: 'text',
            type: 'POST',
            async: true,
            success: function(data) {
                $("#" + id).removeClass('progress_background');
                $("#" + id).addClass('completed_background');
                is_download_ready();
            },
            error: function(data, status) {
                alert('Could not retrieve generated fonts.');
                $('#' + id + " .progress").text("Error");
            }
        });
    }

    function is_download_ready() {
        var row_count = $('#ffgen_filelisting tr').length;
        var completed_count = $('#ffgen_filelisting tr.completed_background').length;
        if (row_count == completed_count) {
            $('.progress').html('&nbsp;');
            $('#ffgen_progressindicator').hide();
            $('#ffgen_downloadbtn').fadeTo(500, 1);
            $('#ffgen_downloadbtn').attr("disabled", false);
            $('#ffgen_form').submit();
        }
    }
    $('#ffgen_form input:not(.softoption)').click(function() {
        $('#ffgen_filelisting tr').removeClass('completed_background');
        $('.progress').html('&nbsp;');
    })
    var glyphs = [];

    function remember_settings() {
        if ($('#rememberme_checkbox').prop("checked") && $('input[name="mode"][value="expert"]').prop('checked')) {
            $.cookie('ffgen_settings', JSON.stringify($('#ffgen_form').object2json()), {
                expires: 365,
                path: "/tools"
            })
        } else {
            $.cookie('ffgen_settings', null)
        }
    }

    function stopRKey(evt) {
        var evt = (evt) ? evt : ((event) ? event : null);
        var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
        if ((evt.keyCode == 13) && (node.type == "text")) {
            return false;
        }
    }
    document.onkeypress = stopRKey;
});

// /presentation/js/jquery.rich-array-min.js //

jQuery.richArray = {
    isin: function(a, b) {
        a = jQuery.richArray.getArray(a);
        b = b || 0;
        for (var i = 0, len = a.length; i < len; ++i) {
            if (a[i] == b) {
                return true
            }
        }
        return false
    },
    unique: function(a) {
        a = jQuery.richArray.getArray(a);
        var b = [];
        for (var i = 0, len = a.length; i < len; ++i) {
            if (!jQuery.richArray.isin(b, a[i])) {
                b.push(a[i])
            }
        }
        return b
    },
    diff: function(a, b) {
        a = jQuery.richArray.getArray(a);
        b = jQuery.richArray.getArray(b);
        var c = [];
        for (var i = 0, len = a.length; i < len; ++i) {
            if (!jQuery.richArray.isin(b, a[i])) {
                c.push(a[i])
            }
        }
        return c
    },
    intersect: function(a, b) {
        a = jQuery.richArray.getArray(a);
        b = jQuery.richArray.getArray(b);
        var c = [];
        for (var i = 0, len = a.length; i < len; ++i) {
            if (jQuery.richArray.isin(b, a[i])) {
                c.push(a[i])
            }
        }
        return c
    },
    filter: function(a, b, c) {
        a = jQuery.richArray.getArray(a);
        b = jQuery.richArray.getFunction(b);
        c = c || this;
        var d = [];
        for (var i = 0, len = a.length; i < len; ++i) {
            if (b.call(c, a[i])) {
                d.push(a[i])
            }
        }
        return d
    },
    map: function(a, b, c) {
        a = jQuery.richArray.getArray(a);
        b = jQuery.richArray.getFunction(b);
        c = c || this;
        result = [];
        for (var i = 0, len = a.length; i < len; ++i) {
            result.push(b.call(c, a[i]))
        }
        return result
    },
    sum: function(a, b) {
        a = jQuery.richArray.getArray(a);
        b = b || 0;
        for (var i = 0, len = a.length; i < len; ++i) {
            b += a[i]
        }
        return b
    },
    product: function(a, b) {
        a = jQuery.richArray.getArray(a);
        b = b || 1;
        for (var i = 0, len = a.length; i < len; ++i) {
            b *= a[i]
        }
        return b
    },
    reduce: function(a) {
        a = jQuery.richArray.getArray(a);
        if (1 == a.length) {
            return a[0]
        }
        return a
    },
    compact: function(a) {
        var b = [];
        for (var i = 0, len = a.length; i < len; ++i) {
            if (null != a[i]) {
                b.push(a[i])
            }
        }
        return b
    },
    without: function(a, b) {
        var c = [];
        for (var i = 0, len = a.length; i < len; ++i) {
            if (b != a[i]) {
                c.push(a[i])
            }
        }
        return c
    },
    getArray: function(a) {
        if (!(a instanceof Array)) {
            a = []
        }
        return a
    },
    getFunction: function(a) {
        if (!(a instanceof Function)) a = new Function();
        return a
    }
};

// /presentation/plugins/form_labels/infieldlabel.min.js //

$(document).ready(function() {
    // FADES FORM LABELS
    $(".infield_labels label").inFieldLabels();
    // END OF FADES FORM LABELS
});

/*
 * In-Field Label jQuery Plugin
 * http://fuelyourcoding.com/scripts/infield.html
 *
 * Copyright (c) 2009 Doug Neiner
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 0.1
 */
(function($) {
    $.InFieldLabels = function(b, c, d) {
        var f = this;
        f.$label = $(b);
        f.label = b;
        f.$field = $(c);
        f.field = c;
        f.$label.data("InFieldLabels", f);
        f.showing = true;
        f.init = function() {
            f.options = $.extend({}, $.InFieldLabels.defaultOptions, d);
            if (f.$field.val() != "") {
                f.$label.hide();
                f.showing = false
            };
            f.$field.focus(function() {
                f.fadeOnFocus()
            }).blur(function() {
                f.checkForEmpty(true)
            }).bind('keydown.infieldlabel', function(e) {
                f.hideOnChange(e)
            }).change(function(e) {
                f.checkForEmpty()
            }).bind('onPropertyChange', function() {
                f.checkForEmpty()
            })
        };
        f.fadeOnFocus = function() {
            if (f.showing) {
                f.setOpacity(f.options.fadeOpacity)
            }
        };
        f.setOpacity = function(a) {
            f.$label.stop().animate({
                opacity: a
            }, f.options.fadeDuration);
            f.showing = (a > 0.0)
        };
        f.checkForEmpty = function(a) {
            if (f.$field.val() == "") {
                f.prepForShow();
                f.setOpacity(a ? 1.0 : f.options.fadeOpacity)
            } else {
                f.setOpacity(0.0)
            }
        };
        f.prepForShow = function(e) {
            if (!f.showing) {
                f.$label.css({
                    opacity: 0.0
                }).show();
                f.$field.bind('keydown.infieldlabel', function(e) {
                    f.hideOnChange(e)
                })
            }
        };
        f.hideOnChange = function(e) {
            if ((e.keyCode == 16) || (e.keyCode == 9)) return;
            if (f.showing) {
                f.$label.hide();
                f.showing = false
            };
            f.$field.unbind('keydown.infieldlabel')
        };
        f.init()
    };
    $.InFieldLabels.defaultOptions = {
        fadeOpacity: 0.5,
        fadeDuration: 300
    };
    $.fn.inFieldLabels = function(c) {
        return this.each(function() {
            var a = $(this).attr('for');
            if (!a) return;
            var b = $("input#" + a + "[type='text']," + "input#" + a + "[type='password']," + "textarea#" + a);
            if (b.length == 0) return;
            (new $.InFieldLabels(this, b[0], c))
        })
    }
})(jQuery);

// /presentation/plugins/qTip/jquery.qtip.min.js //

/*!
 * qTip2 - Pretty powerful tooltips
 * http://craigsworks.com/projects/qtip2/
 *
 * Version: nightly
 * Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
 *
 * Dual licensed under MIT or GPLv2 licenses
 *   http://en.wikipedia.org/wiki/MIT_License
 *   http://en.wikipedia.org/wiki/GNU_General_Public_License
 *
 * Date: Sat Jun  2 08:46:38.0000000000 2012
 */
/*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */ /*global window: false, jQuery: false, console: false, define: false */
(function(a) {
    typeof define === "function" && define.amd ? define(["jquery"], a) : a(jQuery)
})(function(a) {
    function C(d) {
        function v(b) {
            var d = a(b.target),
                e = d.closest(".qtip"),
                f;
            f = e.length < 1 ? c : parseInt(e[0].style.zIndex, 10) > parseInt(i[0].style.zIndex, 10), !f && a(b.target).closest(m)[0] !== i[0] && u(d)
        }

        function u(a) {
            r.length < 1 && a.length ? a.not("body").blur() : r.first().focus()
        }

        function t() {
            r = a(q, i).not("[disabled]").map(function() {
                return typeof this.focus === "function" ? this : null
            })
        }
        var e = this,
            f = d.options.show.modal,
            h = d.elements,
            i = h.tooltip,
            j = "#qtip-overlay",
            k = ".qtipmodal",
            l = k + d.id,
            n = "is-modal-qtip",
            p = a(document.body),
            q = g.modal.focusable.join(","),
            r = {},
            s;
        d.checks.modal = {
            "^show.modal.(on|blur)$": function() {
                e.init(), h.overlay.toggle(i.is(":visible"))
            },
            "^content.text$": t
        }, a.extend(e, {
            init: function() {
                if (!f.on) return e;
                s = e.create(), i.attr(n, b).css("z-index", g.modal.zindex + a(m + "[" + n + "]").length).unbind(k).unbind(l).bind("tooltipshow" + k + " tooltiphide" + k, function(b, c, d) {
                    var f = b.originalEvent;
                    if (b.target === i[0])
                        if (f && b.type === "tooltiphide" && /mouse(leave|enter)/.test(f.type) && a(f.relatedTarget).closest(s[0]).length) try {
                            b.preventDefault()
                        } catch (g) {} else(!f || f && !f.solo) && e[b.type.replace("tooltip", "")](b, d)
                }).bind("tooltipfocus" + k, function(b) {
                    if (!b.isDefaultPrevented() && b.target === i[0]) {
                        var c = a(m).filter("[" + n + "]"),
                            d = g.modal.zindex + c.length,
                            e = parseInt(i[0].style.zIndex, 10);
                        s[0].style.zIndex = d - 2, c.each(function() {
                            this.style.zIndex > e && (this.style.zIndex -= 1)
                        }), c.end().filter("." + o).qtip("blur", b.originalEvent), i.addClass(o)[0].style.zIndex = d;
                        try {
                            b.preventDefault()
                        } catch (f) {}
                    }
                }).bind("tooltiphide" + k, function(b) {
                    b.target === i[0] && a("[" + n + "]").filter(":visible").not(i).last().qtip("focus", b)
                }), f.escape && a(document).unbind(l).bind("keydown" + l, function(a) {
                    a.keyCode === 27 && i.hasClass(o) && d.hide(a)
                }), f.blur && h.overlay.unbind(l).bind("click" + l, function(a) {
                    i.hasClass(o) && d.hide(a)
                }), t();
                return e
            },
            create: function() {
                function d() {
                    s.css({
                        height: a(window).height(),
                        width: a(window).width()
                    })
                }
                var b = a(j);
                if (b.length) return h.overlay = b.insertAfter(a(m).last());
                s = h.overlay = a("<div />", {
                    id: j.substr(1),
                    html: "<div></div>",
                    mousedown: function() {
                        return c
                    }
                }).hide().insertAfter(a(m).last()), a(window).unbind(k).bind("resize" + k, d), d();
                return s
            },
            toggle: function(d, g, h) {
                if (d && d.isDefaultPrevented()) return e;
                var j = f.effect,
                    k = g ? "show" : "hide",
                    m = s.is(":visible"),
                    o = a("[" + n + "]").filter(":visible").not(i),
                    q;
                s || (s = e.create());
                if (s.is(":animated") && m === g || !g && o.length) return e;
                g ? (s.css({
                    left: 0,
                    top: 0
                }), s.toggleClass("blurs", f.blur), f.stealfocus !== c && (p.bind("focusin" + l, v), u(a("body *")))) : p.unbind("focusin" + l), s.stop(b, c), a.isFunction(j) ? j.call(s, g) : j === c ? s[k]() : s.fadeTo(parseInt(h, 10) || 90, g ? 1 : 0, function() {
                    g || a(this).hide()
                }), g || s.queue(function(a) {
                    s.css({
                        left: "",
                        top: ""
                    }), a()
                });
                return e
            },
            show: function(a, c) {
                return e.toggle(a, b, c)
            },
            hide: function(a, b) {
                return e.toggle(a, c, b)
            },
            destroy: function() {
                var b = s;
                b && (b = a("[" + n + "]").not(i).length < 1, b ? (h.overlay.remove(), a(document).unbind(k)) : h.overlay.unbind(k + d.id), p.undelegate("*", "focusin" + l));
                return i.removeAttr(n).unbind(k)
            }
        }), e.init()
    }

    function B(f, h) {
        function y(a) {
            var b = a.precedance === "y",
                c = n[b ? "width" : "height"],
                d = n[b ? "height" : "width"],
                e = a.string().indexOf("center") > -1,
                f = c * (e ? .5 : 1),
                g = Math.pow,
                h = Math.round,
                i, j, k, l = Math.sqrt(g(f, 2) + g(d, 2)),
                m = [p / f * l, p / d * l];
            m[2] = Math.sqrt(g(m[0], 2) - g(p, 2)), m[3] = Math.sqrt(g(m[1], 2) - g(p, 2)), i = l + m[2] + m[3] + (e ? 0 : m[0]), j = i / l, k = [h(j * d), h(j * c)];
            return {
                height: k[b ? 0 : 1],
                width: k[b ? 1 : 0]
            }
        }

        function x(b) {
            var c = k.titlebar && b.y === "top",
                d = c ? k.titlebar : k.content,
                e = a.browser.mozilla,
                f = e ? "-moz-" : a.browser.webkit ? "-webkit-" : "",
                g = b.y + (e ? "" : "-") + b.x,
                h = f + (e ? "border-radius-" + g : "border-" + g + "-radius");
            return parseInt(d.css(h), 10) || parseInt(l.css(h), 10) || 0
        }

        function w(a, b, c) {
            b = b ? b : a[a.precedance];
            var d = l.hasClass(q),
                e = k.titlebar && a.y === "top",
                f = e ? k.titlebar : k.tooltip,
                g = "border-" + b + "-width",
                h;
            l.addClass(q), h = parseInt(f.css(g), 10), h = (c ? h || parseInt(l.css(g), 10) : h) || 0, l.toggleClass(q, d);
            return h
        }

        function v(a, d, g, h) {
            if (k.tip) {
                var l = i.corner.clone(),
                    n = g.adjusted,
                    o = f.options.position.adjust.method.split(" "),
                    p = o[0],
                    q = o[1] || o[0],
                    r = {
                        left: c,
                        top: c,
                        x: 0,
                        y: 0
                    },
                    s, t = {},
                    u;
                i.corner.fixed !== b && (p === "shift" && l.precedance === "x" && n.left && l.y !== "center" ? l.precedance = l.precedance === "x" ? "y" : "x" : p !== "shift" && n.left && (l.x = l.x === "center" ? n.left > 0 ? "left" : "right" : l.x === "left" ? "right" : "left"), q === "shift" && l.precedance === "y" && n.top && l.x !== "center" ? l.precedance = l.precedance === "y" ? "x" : "y" : q !== "shift" && n.top && (l.y = l.y === "center" ? n.top > 0 ? "top" : "bottom" : l.y === "top" ? "bottom" : "top"), l.string() !== m.corner.string() && (m.top !== n.top || m.left !== n.left) && i.update(l, c)), s = i.position(l, n), s[l.x] += w(l, l.x, b), s[l.y] += w(l, l.y, b), s.right !== e && (s.left = -s.right), s.bottom !== e && (s.top = -s.bottom), s.user = Math.max(0, j.offset);
                if (r.left = p === "shift" && !!n.left) l.x === "center" ? t["margin-left"] = r.x = s["margin-left"] - n.left : (u = s.right !== e ? [n.left, -s.left] : [-n.left, s.left], (r.x = Math.max(u[0], u[1])) > u[0] && (g.left -= n.left, r.left = c), t[s.right !== e ? "right" : "left"] = r.x);
                if (r.top = q === "shift" && !!n.top) l.y === "center" ? t["margin-top"] = r.y = s["margin-top"] - n.top : (u = s.bottom !== e ? [n.top, -s.top] : [-n.top, s.top], (r.y = Math.max(u[0], u[1])) > u[0] && (g.top -= n.top, r.top = c), t[s.bottom !== e ? "bottom" : "top"] = r.y);
                k.tip.css(t).toggle(!(r.x && r.y || l.x === "center" && r.y || l.y === "center" && r.x)), g.left -= s.left.charAt ? s.user : p !== "shift" || r.top || !r.left && !r.top ? s.left : 0, g.top -= s.top.charAt ? s.user : q !== "shift" || r.left || !r.left && !r.top ? s.top : 0, m.left = n.left, m.top = n.top, m.corner = l.clone()
            }
        }

        function u() {
            n.width = j.width, n.height = j.height
        }

        function t() {
            var a = n.width;
            n.width = n.height, n.height = a
        }
        var i = this,
            j = f.options.style.tip,
            k = f.elements,
            l = k.tooltip,
            m = {
                top: 0,
                left: 0
            },
            n = {
                width: j.width,
                height: j.height
            },
            o = {},
            p = j.border || 0,
            r = ".qtip-tip",
            s = !!(a("<canvas />")[0] || {}).getContext;
        i.mimic = i.corner = d, i.border = p, i.offset = j.offset, i.size = n, f.checks.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function() {
                i.init() || i.destroy(), f.reposition()
            },
            "^style.tip.(height|width)$": function() {
                n = {
                    width: j.width,
                    height: j.height
                }, i.create(), i.update(), f.reposition()
            },
            "^content.title.text|style.(classes|widget)$": function() {
                k.tip && k.tip.length && i.update()
            }
        }, a.extend(i, {
            init: function() {
                var b = i.detectCorner() && (s || a.browser.msie);
                b && (i.create(), i.update(), l.unbind(r).bind("tooltipmove" + r, v));
                return b
            },
            detectCorner: function() {
                var a = j.corner,
                    d = f.options.position,
                    e = d.at,
                    h = d.my.string ? d.my.string() : d.my;
                if (a === c || h === c && e === c) return c;
                a === b ? i.corner = new g.Corner(h) : a.string || (i.corner = new g.Corner(a), i.corner.fixed = b), m.corner = new g.Corner(i.corner.string());
                return i.corner.string() !== "centercenter"
            },
            detectColours: function(b) {
                var c, d, e, f = k.tip.css("cssText", ""),
                    g = b || i.corner,
                    h = g[g.precedance],
                    m = "border-" + h + "-color",
                    p = "border" + h.charAt(0) + h.substr(1) + "Color",
                    r = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
                    s = "background-color",
                    t = "transparent",
                    u = " !important",
                    v = k.titlebar && (g.y === "top" || g.y === "center" && f.position().top + n.height / 2 + j.offset < k.titlebar.outerHeight(1)),
                    w = v ? k.titlebar : k.tooltip;
                l.addClass(q), o.fill = d = f.css(s), o.border = e = f[0].style[p] || f.css(m) || l.css(m);
                if (!d || r.test(d)) o.fill = w.css(s) || t, r.test(o.fill) && (o.fill = l.css(s) || d);
                if (!e || r.test(e) || e === a(document.body).css("color")) {
                    o.border = w.css(m) || t;
                    if (r.test(o.border) || o.border === w.css("color")) o.border = l.css(m) || l.css(p) || e
                }
                a("*", f).add(f).css("cssText", s + ":" + t + u + ";border:0" + u + ";"), l.removeClass(q)
            },
            create: function() {
                var b = n.width,
                    c = n.height,
                    d;
                k.tip && k.tip.remove(), k.tip = a("<div />", {
                    "class": "ui-tooltip-tip"
                }).css({
                    width: b,
                    height: c
                }).prependTo(l), s ? a("<canvas />").appendTo(k.tip)[0].getContext("2d").save() : (d = '<vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"></vml:shape>', k.tip.html(d + d), a("*", k.tip).bind("click mousedown", function(a) {
                    a.stopPropagation()
                }))
            },
            update: function(e, f) {
                var h = k.tip,
                    q = h.children(),
                    r = n.width,
                    v = n.height,
                    x = "px solid ",
                    z = "px dashed transparent",
                    B = j.mimic,
                    C = Math.round,
                    D, E, F, G, H;
                e || (e = m.corner || i.corner), B === c ? B = e : (B = new g.Corner(B), B.precedance = e.precedance, B.x === "inherit" ? B.x = e.x : B.y === "inherit" ? B.y = e.y : B.x === B.y && (B[e.precedance] = e[e.precedance])), D = B.precedance, e.precedance === "x" ? t() : u(), k.tip.css({
                    width: r = n.width,
                    height: v = n.height
                }), i.detectColours(e), o.border !== "transparent" ? (p = w(e, d, b), j.border === 0 && p > 0 && (o.fill = o.border), i.border = p = j.border !== b ? j.border : p) : i.border = p = 0, F = A(B, r, v), i.size = H = y(e), h.css(H), e.precedance === "y" ? G = [C(B.x === "left" ? p : B.x === "right" ? H.width - r - p : (H.width - r) / 2), C(B.y === "top" ? H.height - v : 0)] : G = [C(B.x === "left" ? H.width - r : 0), C(B.y === "top" ? p : B.y === "bottom" ? H.height - v - p : (H.height - v) / 2)], s ? (q.attr(H), E = q[0].getContext("2d"), E.restore(), E.save(), E.clearRect(0, 0, 3e3, 3e3), E.fillStyle = o.fill, E.strokeStyle = o.border, E.lineWidth = p * 2, E.lineJoin = "miter", E.miterLimit = 100, E.translate(G[0], G[1]), E.beginPath(), E.moveTo(F[0][0], F[0][1]), E.lineTo(F[1][0], F[1][1]), E.lineTo(F[2][0], F[2][1]), E.closePath(), p && (l.css("background-clip") === "border-box" && (E.strokeStyle = o.fill, E.stroke()), E.strokeStyle = o.border, E.stroke()), E.fill()) : (F = "m" + F[0][0] + "," + F[0][1] + " l" + F[1][0] + "," + F[1][1] + " " + F[2][0] + "," + F[2][1] + " xe", G[2] = p && /^(r|b)/i.test(e.string()) ? parseFloat(a.browser.version, 10) === 8 ? 2 : 1 : 0, q.css({
                    antialias: "" + (B.string().indexOf("center") > -1),
                    left: G[0] - G[2] * Number(D === "x"),
                    top: G[1] - G[2] * Number(D === "y"),
                    width: r + p,
                    height: v + p
                }).each(function(b) {
                    var c = a(this);
                    c[c.prop ? "prop" : "attr"]({
                        coordsize: r + p + " " + (v + p),
                        path: F,
                        fillcolor: o.fill,
                        filled: !!b,
                        stroked: !b
                    }).css({
                        display: p || b ? "block" : "none"
                    }), !b && c.html() === "" && c.html('<vml:stroke weight="' + p * 2 + 'px" color="' + o.border + '" miterlimit="1000" joinstyle="miter"  style="behavior:url(#default#VML); display:inline-block;" />')
                })), f !== c && i.position(e)
            },
            position: function(b) {
                var d = k.tip,
                    e = {},
                    f = Math.max(0, j.offset),
                    g, h, l;
                if (j.corner === c || !d) return c;
                b = b || i.corner, g = b.precedance, h = y(b), l = [b.x, b.y], g === "x" && l.reverse(), a.each(l, function(a, c) {
                    var d, i;
                    c === "center" ? (d = g === "y" ? "left" : "top", e[d] = "50%", e["margin-" + d] = -Math.round(h[g === "y" ? "width" : "height"] / 2) + f) : (d = w(b, c), i = x(b), e[c] = a ? 0 : f + (i > d ? i : -d))
                }), e[b[g]] -= h[g === "x" ? "width" : "height"], d.css({
                    top: "",
                    bottom: "",
                    left: "",
                    right: "",
                    margin: ""
                }).css(e);
                return e
            },
            destroy: function() {
                k.tip && k.tip.remove(), k.tip = !1, l.unbind(r)
            }
        }), i.init()
    }

    function A(a, b, c) {
        var d = Math.ceil(b / 2),
            e = Math.ceil(c / 2),
            f = {
                bottomright: [
                    [0, 0],
                    [b, c],
                    [b, 0]
                ],
                bottomleft: [
                    [0, 0],
                    [b, 0],
                    [0, c]
                ],
                topright: [
                    [0, c],
                    [b, 0],
                    [b, c]
                ],
                topleft: [
                    [0, 0],
                    [0, c],
                    [b, c]
                ],
                topcenter: [
                    [0, c],
                    [d, 0],
                    [b, c]
                ],
                bottomcenter: [
                    [0, 0],
                    [b, 0],
                    [d, c]
                ],
                rightcenter: [
                    [0, 0],
                    [b, e],
                    [0, c]
                ],
                leftcenter: [
                    [b, 0],
                    [b, c],
                    [0, e]
                ]
            };
        f.lefttop = f.bottomright, f.righttop = f.bottomleft, f.leftbottom = f.topright, f.rightbottom = f.topleft;
        return f[a.string()]
    }

    function z(d) {
        var e = this,
            g = d.elements.tooltip,
            h = d.options.content.ajax,
            i = f.defaults.content.ajax,
            j = ".qtip-ajax",
            k = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            l = b,
            m = c,
            n;
        d.checks.ajax = {
            "^content.ajax": function(a, b, c) {
                b === "ajax" && (h = c), b === "once" ? e.init() : h && h.url ? e.load() : g.unbind(j)
            }
        }, a.extend(e, {
            init: function() {
                h && h.url && g.unbind(j)[h.once ? "one" : "bind"]("tooltipshow" + j, e.load);
                return e
            },
            load: function(f) {
                function t(a, b, c) {
                    !d.destroyed && a.status !== 0 && d.set("content.text", b + ": " + c)
                }

                function s(b, c, e) {
                    var f;
                    d.destroyed || (o && (b = a("<div/>").append(b.replace(k, "")).find(o)), (f = i.success || h.success) && a.isFunction(f) ? f.call(h.context || d, b, c, e) : d.set("content.text", b))
                }

                function r() {
                    var e;
                    d.destroyed || (l = c, p && (m = b, d.show(f.originalEvent)), (e = i.complete || h.complete) && a.isFunction(e) && e.apply(h.context || d, arguments))
                }
                if (m) m = c;
                else {
                    var g = h.url.indexOf(" "),
                        j = h.url,
                        o, p = !h.loading && l;
                    if (p) try {
                        f.preventDefault()
                    } catch (q) {} else if (f && f.isDefaultPrevented()) return e;
                    n && n.abort && n.abort(), g > -1 && (o = j.substr(g), j = j.substr(0, g)), n = a.ajax(a.extend({
                        error: i.error || t,
                        context: d
                    }, h, {
                        url: j,
                        success: s,
                        complete: r
                    }))
                }
            },
            destroy: function() {
                n && n.abort && n.abort(), d.destroyed = b
            }
        }), e.init()
    }

    function y(e, h) {
        var i, j, k, l, m, n = a(this),
            o = a(document.body),
            p = this === document ? o : n,
            q = n.metadata ? n.metadata(h.metadata) : d,
            r = h.metadata.type === "html5" && q ? q[h.metadata.name] : d,
            s = n.data(h.metadata.name || "qtipopts");
        try {
            s = typeof s === "string" ? (new Function("return " + s))() : s
        } catch (u) {
            v("Unable to parse HTML5 attribute data: " + s)
        }
        l = a.extend(b, {}, f.defaults, h, typeof s === "object" ? w(s) : d, w(r || q)), j = l.position, l.id = e;
        if ("boolean" === typeof l.content.text) {
            k = n.attr(l.content.attr);
            if (l.content.attr !== c && k) l.content.text = k;
            else {
                v("Unable to locate content for tooltip! Aborting render of tooltip on element: ", n);
                return c
            }
        }
        j.container.length || (j.container = o), j.target === c && (j.target = p), l.show.target === c && (l.show.target = p), l.show.solo === b && (l.show.solo = j.container.closest("body")), l.hide.target === c && (l.hide.target = p), l.position.viewport === b && (l.position.viewport = j.container), j.container = j.container.eq(0), j.at = new g.Corner(j.at), j.my = new g.Corner(j.my);
        if (a.data(this, "qtip"))
            if (l.overwrite) n.qtip("destroy");
            else if (l.overwrite === c) return c;
        l.suppress && (m = a.attr(this, "title")) && a(this).removeAttr("title").attr(t, m).attr("title", ""), i = new x(n, l, e, !!k), a.data(this, "qtip", i), n.bind("remove.qtip-" + e + " removeqtip.qtip-" + e, function() {
            i.destroy()
        });
        return i
    }

    function x(r, s, v, x) {
        function Q() {
            var b = [s.show.target[0], s.hide.target[0], y.rendered && F.tooltip[0], s.position.container[0], s.position.viewport[0], window, document];
            y.rendered ? a([]).pushStack(a.grep(b, function(a) {
                return typeof a === "object"
            })).unbind(E) : s.show.target.unbind(E + "-create")
        }

        function P() {
            function o(a) {
                y.rendered && D[0].offsetWidth > 0 && y.reposition(a)
            }

            function n(a) {
                if (D.hasClass(l)) return c;
                clearTimeout(y.timers.inactive), y.timers.inactive = setTimeout(function() {
                    y.hide(a)
                }, s.hide.inactive)
            }

            function k(b) {
                if (D.hasClass(l) || B || C) return c;
                var f = a(b.relatedTarget || b.target),
                    g = f.closest(m)[0] === D[0],
                    h = f[0] === e.show[0];
                clearTimeout(y.timers.show), clearTimeout(y.timers.hide);
                if (d.target === "mouse" && g || s.hide.fixed && (/mouse(out|leave|move)/.test(b.type) && (g || h))) try {
                    b.preventDefault(), b.stopImmediatePropagation()
                } catch (i) {} else s.hide.delay > 0 ? y.timers.hide = setTimeout(function() {
                    y.hide(b)
                }, s.hide.delay) : y.hide(b)
            }

            function j(a) {
                if (D.hasClass(l)) return c;
                clearTimeout(y.timers.show), clearTimeout(y.timers.hide);
                var d = function() {
                    y.toggle(b, a)
                };
                s.show.delay > 0 ? y.timers.show = setTimeout(d, s.show.delay) : d()
            }
            var d = s.position,
                e = {
                    show: s.show.target,
                    hide: s.hide.target,
                    viewport: a(d.viewport),
                    document: a(document),
                    body: a(document.body),
                    window: a(window)
                },
                g = {
                    show: a.trim("" + s.show.event).split(" "),
                    hide: a.trim("" + s.hide.event).split(" ")
                },
                i = a.browser.msie && parseInt(a.browser.version, 10) === 6;
            D.bind("mouseenter" + E + " mouseleave" + E, function(a) {
                var b = a.type === "mouseenter";
                b && y.focus(a), D.toggleClass(p, b)
            }), s.hide.fixed && (e.hide = e.hide.add(D), D.bind("mouseover" + E, function() {
                D.hasClass(l) || clearTimeout(y.timers.hide)
            })), /mouse(out|leave)/i.test(s.hide.event) ? s.hide.leave === "window" && e.window.bind("mouseout" + E + " blur" + E, function(a) {
                /select|option/.test(a.target) && !a.relatedTarget && y.hide(a)
            }) : /mouse(over|enter)/i.test(s.show.event) && e.hide.bind("mouseleave" + E, function(a) {
                clearTimeout(y.timers.show)
            }), ("" + s.hide.event).indexOf("unfocus") > -1 && d.container.closest("html").bind("mousedown" + E, function(b) {
                var c = a(b.target),
                    d = y.rendered && !D.hasClass(l) && D[0].offsetWidth > 0,
                    e = c.parents(m).filter(D[0]).length > 0;
                c[0] !== r[0] && c[0] !== D[0] && !e && !r.has(c[0]).length && !c.attr("disabled") && y.hide(b)
            }), "number" === typeof s.hide.inactive && (e.show.bind("qtip-" + v + "-inactive", n), a.each(f.inactiveEvents, function(a, b) {
                e.hide.add(F.tooltip).bind(b + E + "-inactive", n)
            })), a.each(g.hide, function(b, c) {
                var d = a.inArray(c, g.show),
                    f = a(e.hide);
                d > -1 && f.add(e.show).length === f.length || c === "unfocus" ? (e.show.bind(c + E, function(a) {
                    D[0].offsetWidth > 0 ? k(a) : j(a)
                }), delete g.show[d]) : e.hide.bind(c + E, k)
            }), a.each(g.show, function(a, b) {
                e.show.bind(b + E, j)
            }), "number" === typeof s.hide.distance && e.show.add(D).bind("mousemove" + E, function(a) {
                var b = G.origin || {},
                    c = s.hide.distance,
                    d = Math.abs;
                (d(a.pageX - b.pageX) >= c || d(a.pageY - b.pageY) >= c) && y.hide(a)
            }), d.target === "mouse" && (e.show.bind("mousemove" + E, function(a) {
                h = {
                    pageX: a.pageX,
                    pageY: a.pageY,
                    type: "mousemove"
                }
            }), d.adjust.mouse && (s.hide.event && (D.bind("mouseleave" + E, function(a) {
                (a.relatedTarget || a.target) !== e.show[0] && y.hide(a)
            }), F.target.bind("mouseenter" + E + " mouseleave" + E, function(a) {
                G.onTarget = a.type === "mouseenter"
            })), e.document.bind("mousemove" + E, function(a) {
                y.rendered && G.onTarget && !D.hasClass(l) && D[0].offsetWidth > 0 && y.reposition(a || h)
            }))), (d.adjust.resize || e.viewport.length) && (a.event.special.resize ? e.viewport : e.window).bind("resize" + E, o), (e.viewport.length || i && D.css("position") === "fixed") && e.viewport.bind("scroll" + E, o)
        }

        function O(b, d) {
            function g(b) {
                function i(e) {
                    e && (delete h[e.src], clearTimeout(y.timers.img[e.src]), a(e).unbind(E)), a.isEmptyObject(h) && (y.redraw(), d !== c && y.reposition(G.event), b())
                }
                var g, h = {};
                if ((g = f.find("img[src]:not([height]):not([width])")).length === 0) return i();
                g.each(function(b, c) {
                    if (h[c.src] === e) {
                        var d = 0,
                            f = 3;
                        (function g() {
                            if (c.height || c.width || d > f) return i(c);
                            d += 1, y.timers.img[c.src] = setTimeout(g, 700)
                        })(), a(c).bind("error" + E + " load" + E, function() {
                            i(this)
                        }), h[c.src] = c
                    }
                })
            }
            var f = F.content;
            if (!y.rendered || !b) return c;
            a.isFunction(b) && (b = b.call(r, G.event, y) || ""), b.jquery && b.length > 0 ? f.empty().append(b.css({
                display: "block"
            })) : f.html(b), y.rendered < 0 ? D.queue("fx", g) : (C = 0, g(a.noop));
            return y
        }

        function N(b, d) {
            var e = F.title;
            if (!y.rendered || !b) return c;
            a.isFunction(b) && (b = b.call(r, G.event, y));
            if (b === c || !b && b !== "") return J(c);
            b.jquery && b.length > 0 ? e.empty().append(b.css({
                display: "block"
            })) : e.html(b), y.redraw(), d !== c && y.rendered && D[0].offsetWidth > 0 && y.reposition(G.event)
        }

        function M(a) {
            var b = F.button,
                d = F.title;
            if (!y.rendered) return c;
            a ? (d || L(), K()) : b.remove()
        }

        function L() {
            var c = A + "-title";
            F.titlebar && J(), F.titlebar = a("<div />", {
                "class": j + "-titlebar " + (s.style.widget ? "ui-widget-header" : "")
            }).append(F.title = a("<div />", {
                id: c,
                "class": j + "-title",
                "aria-atomic": b
            })).insertBefore(F.content).delegate(".ui-tooltip-close", "mousedown keydown mouseup keyup mouseout", function(b) {
                a(this).toggleClass("ui-state-active ui-state-focus", b.type.substr(-4) === "down")
            }).delegate(".ui-tooltip-close", "mouseover mouseout", function(b) {
                a(this).toggleClass("ui-state-hover", b.type === "mouseover")
            }), s.content.title.button ? K() : y.rendered && y.redraw()
        }

        function K() {
            var b = s.content.title.button,
                d = typeof b === "string",
                e = d ? b : "Close tooltip";
            F.button && F.button.remove(), b.jquery ? F.button = b : F.button = a("<a />", {
                "class": "ui-state-default ui-tooltip-close " + (s.style.widget ? "" : j + "-icon"),
                title: e,
                "aria-label": e
            }).prepend(a("<span />", {
                "class": "ui-icon ui-icon-close",
                html: "&times;"
            })), F.button.appendTo(F.titlebar).attr("role", "button").click(function(a) {
                D.hasClass(l) || y.hide(a);
                return c
            }), y.redraw()
        }

        function J(a) {
            F.title && (F.titlebar.remove(), F.titlebar = F.title = F.button = d, a !== c && y.reposition())
        }

        function I() {
            var a = s.style.widget;
            D.toggleClass(k, a).toggleClass(n, s.style.def && !a), F.content.toggleClass(k + "-content", a), F.titlebar && F.titlebar.toggleClass(k + "-header", a), F.button && F.button.toggleClass(j + "-icon", !a)
        }

        function H(a) {
            var b = 0,
                c, d = s,
                e = a.split(".");
            while (d = d[e[b++]]) b < e.length && (c = d);
            return [c || s, e.pop()]
        }
        var y = this,
            z = document.body,
            A = j + "-" + v,
            B = 0,
            C = 0,
            D = a(),
            E = ".qtip-" + v,
            F, G;
        y.id = v, y.destroyed = y.rendered = c, y.elements = F = {
            target: r
        }, y.timers = {
            img: {}
        }, y.options = s, y.checks = {}, y.plugins = {}, y.cache = G = {
            event: {},
            target: a(),
            disabled: c,
            attr: x,
            onTarget: c
        }, y.checks.builtin = {
            "^id$": function(d, e, g) {
                var h = g === b ? f.nextid : g,
                    i = j + "-" + h;
                h !== c && h.length > 0 && !a("#" + i).length && (D[0].id = i, F.content[0].id = i + "-content", F.title[0].id = i + "-title")
            },
            "^content.text$": function(a, b, c) {
                O(c)
            },
            "^content.title.text$": function(a, b, c) {
                if (!c) return J();
                !F.title && c && L(), N(c)
            },
            "^content.title.button$": function(a, b, c) {
                M(c)
            },
            "^position.(my|at)$": function(a, b, c) {
                "string" === typeof c && (a[b] = new g.Corner(c))
            },
            "^position.container$": function(a, b, c) {
                y.rendered && D.appendTo(c)
            },
            "^show.ready$": function() {
                y.rendered ? y.toggle(b) : y.render(1)
            },
            "^style.classes$": function(a, b, c) {
                D.attr("class", j + " qtip ui-helper-reset " + c)
            },
            "^style.widget|content.title": I,
            "^events.(render|show|move|hide|focus|blur)$": function(b, c, d) {
                D[(a.isFunction(d) ? "" : "un") + "bind"]("tooltip" + c, d)
            },
            "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                var a = s.position;
                D.attr("tracking", a.target === "mouse" && a.adjust.mouse), Q(), P()
            }
        }, a.extend(y, {
            render: function(d) {
                if (y.rendered) return y;
                var e = s.content.text,
                    f = s.content.title.text,
                    h = s.position,
                    i = a.Event("tooltiprender");
                a.attr(r[0], "aria-describedby", A), D = F.tooltip = a("<div/>", {
                    id: A,
                    "class": j + " qtip ui-helper-reset " + n + " " + s.style.classes + " " + j + "-pos-" + s.position.my.abbrev(),
                    width: s.style.width || "",
                    height: s.style.height || "",
                    tracking: h.target === "mouse" && h.adjust.mouse,
                    role: "alert",
                    "aria-live": "polite",
                    "aria-atomic": c,
                    "aria-describedby": A + "-content",
                    "aria-hidden": b
                }).toggleClass(l, G.disabled).data("qtip", y).appendTo(s.position.container).append(F.content = a("<div />", {
                    "class": j + "-content",
                    id: A + "-content",
                    "aria-atomic": b
                })), y.rendered = -1, B = C = 1, f && (L(), a.isFunction(f) || N(f, c)), a.isFunction(e) || O(e, c), y.rendered = b, I(), a.each(s.events, function(b, c) {
                    a.isFunction(c) && D.bind(b === "toggle" ? "tooltipshow tooltiphide" : "tooltip" + b, c)
                }), a.each(g, function() {
                    this.initialize === "render" && this(y)
                }), P(), D.queue("fx", function(a) {
                    i.originalEvent = G.event, D.trigger(i, [y]), B = C = 0, y.redraw(), (s.show.ready || d) && y.toggle(b, G.event, c), a()
                });
                return y
            },
            get: function(a) {
                var b, c;
                switch (a.toLowerCase()) {
                    case "dimensions":
                        b = {
                            height: D.outerHeight(),
                            width: D.outerWidth()
                        };
                        break;
                    case "offset":
                        b = g.offset(D, s.position.container);
                        break;
                    default:
                        c = H(a.toLowerCase()), b = c[0][c[1]], b = b.precedance ? b.string() : b
                }
                return b
            },
            set: function(e, f) {
                function m(a, b) {
                    var c, d, e;
                    for (c in k)
                        for (d in k[c])
                            if (e = (new RegExp(d, "i")).exec(a)) b.push(e), k[c][d].apply(y, b)
                }
                var g = /^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,
                    h = /^content\.(title|attr)|style/i,
                    i = c,
                    j = c,
                    k = y.checks,
                    l;
                "string" === typeof e ? (l = e, e = {}, e[l] = f) : e = a.extend(b, {}, e), a.each(e, function(b, c) {
                    var d = H(b.toLowerCase()),
                        f;
                    f = d[0][d[1]], d[0][d[1]] = "object" === typeof c && c.nodeType ? a(c) : c, e[b] = [d[0], d[1], c, f], i = g.test(b) || i, j = h.test(b) || j
                }), w(s), B = C = 1, a.each(e, m), B = C = 0, y.rendered && D[0].offsetWidth > 0 && (i && y.reposition(s.position.target === "mouse" ? d : G.event), j && y.redraw());
                return y
            },
            toggle: function(e, f) {
                function t() {
                    e ? (a.browser.msie && D[0].style.removeAttribute("filter"), D.css("overflow", ""), "string" === typeof i.autofocus && a(i.autofocus, D).focus(), i.target.trigger("qtip-" + v + "-inactive")) : D.css({
                        display: "",
                        visibility: "",
                        opacity: "",
                        left: "",
                        top: ""
                    }), r = a.Event("tooltip" + (e ? "visible" : "hidden")), r.originalEvent = f ? G.event : d, D.trigger(r, [y])
                }
                if (!y.rendered) return e ? y.render(1) : y;
                var g = e ? "show" : "hide",
                    i = s[g],
                    j = s[e ? "hide" : "show"],
                    k = s.position,
                    l = s.content,
                    n = D[0].offsetWidth > 0,
                    o = e || i.target.length === 1,
                    p = !f || i.target.length < 2 || G.target[0] === f.target,
                    q, r;
                (typeof e).search("boolean|number") && (e = !n);
                if (!D.is(":animated") && n === e && p) return y;
                if (f) {
                    if (/over|enter/.test(f.type) && /out|leave/.test(G.event.type) && s.show.target.add(f.target).length === s.show.target.length && D.has(f.relatedTarget).length) return y;
                    G.event = a.extend({}, f)
                }
                r = a.Event("tooltip" + g), r.originalEvent = f ? G.event : d, D.trigger(r, [y, 90]);
                if (r.isDefaultPrevented()) return y;
                a.attr(D[0], "aria-hidden", !e), e ? (G.origin = a.extend({}, h), y.focus(f), a.isFunction(l.text) && O(l.text, c), a.isFunction(l.title.text) && N(l.title.text, c), !u && k.target === "mouse" && k.adjust.mouse && (a(document).bind("mousemove.qtip", function(a) {
                    h = {
                        pageX: a.pageX,
                        pageY: a.pageY,
                        type: "mousemove"
                    }
                }), u = b), y.reposition(f, arguments[2]), (r.solo = !!i.solo) && a(m, i.solo).not(D).qtip("hide", r)) : (clearTimeout(y.timers.show), delete G.origin, u && !a(m + '[tracking="true"]:visible', i.solo).not(D).length && (a(document).unbind("mousemove.qtip"), u = c), y.blur(f)), i.effect === c || o === c ? (D[g](), t.call(D)) : a.isFunction(i.effect) ? (D.stop(1, 1), i.effect.call(D, y), D.queue("fx", function(a) {
                    t(), a()
                })) : D.fadeTo(90, e ? 1 : 0, t), e && i.target.trigger("qtip-" + v + "-inactive");
                return y
            },
            show: function(a) {
                return y.toggle(b, a)
            },
            hide: function(a) {
                return y.toggle(c, a)
            },
            focus: function(b) {
                if (!y.rendered) return y;
                var c = a(m),
                    d = parseInt(D[0].style.zIndex, 10),
                    e = f.zindex + c.length,
                    g = a.extend({}, b),
                    h, i;
                D.hasClass(o) || (i = a.Event("tooltipfocus"), i.originalEvent = g, D.trigger(i, [y, e]), i.isDefaultPrevented() || (d !== e && (c.each(function() {
                    this.style.zIndex > d && (this.style.zIndex = this.style.zIndex - 1)
                }), c.filter("." + o).qtip("blur", g)), D.addClass(o)[0].style.zIndex = e));
                return y
            },
            blur: function(b) {
                var c = a.extend({}, b),
                    d;
                D.removeClass(o), d = a.Event("tooltipblur"), d.originalEvent = c, D.trigger(d, [y]);
                return y
            },
            reposition: function(b, d) {
                if (!y.rendered || B) return y;
                B = 1;
                var e = s.position.target,
                    f = s.position,
                    i = f.my,
                    k = f.at,
                    l = f.adjust,
                    m = l.method.split(" "),
                    n = D.outerWidth(),
                    o = D.outerHeight(),
                    p = 0,
                    q = 0,
                    r = a.Event("tooltipmove"),
                    t = D.css("position") === "fixed",
                    u = f.viewport,
                    v = {
                        left: 0,
                        top: 0
                    },
                    w = f.container,
                    x = c,
                    A = y.plugins.tip,
                    C = D[0].offsetWidth > 0,
                    E = {
                        horizontal: m[0],
                        vertical: m[1] = m[1] || m[0],
                        enabled: u.jquery && e[0] !== window && e[0] !== z && l.method !== "none",
                        left: function(a) {
                            var b = E.horizontal === "shift",
                                c = l.x * (E.horizontal.substr(-6) === "invert" ? 2 : 0),
                                d = -w.offset.left + u.offset.left + u.scrollLeft,
                                e = i.x === "left" ? n : i.x === "right" ? -n : -n / 2,
                                f = k.x === "left" ? p : k.x === "right" ? -p : -p / 2,
                                g = A && A.size ? A.size.width || 0 : 0,
                                h = A && A.corner && A.corner.precedance === "x" && !b ? g : 0,
                                j = d - a + h,
                                m = a + n - u.width - d + h,
                                o = e - (i.precedance === "x" || i.x === i.y ? f : 0) - (k.x === "center" ? p / 2 : 0),
                                q = i.x === "center";
                            b ? (h = A && A.corner && A.corner.precedance === "y" ? g : 0, o = (i.x === "left" ? 1 : -1) * e - h, v.left += j > 0 ? j : m > 0 ? -m : 0, v.left = Math.max(-w.offset.left + u.offset.left + (h && A.corner.x === "center" ? A.offset : 0), a - o, Math.min(Math.max(-w.offset.left + u.offset.left + u.width, a + o), v.left))) : (j > 0 && (i.x !== "left" || m > 0) ? v.left -= o + c : m > 0 && (i.x !== "right" || j > 0) && (v.left -= (q ? -o : o) + c), v.left < d && -v.left > m && (v.left = a));
                            return v.left - a
                        },
                        top: function(a) {
                            var b = E.vertical === "shift",
                                c = l.y * (E.vertical.substr(-6) === "invert" ? 2 : 0),
                                d = -w.offset.top + u.offset.top + u.scrollTop,
                                e = i.y === "top" ? o : i.y === "bottom" ? -o : -o / 2,
                                f = k.y === "top" ? q : k.y === "bottom" ? -q : -q / 2,
                                g = A && A.size ? A.size.height || 0 : 0,
                                h = A && A.corner && A.corner.precedance === "y" && !b ? g : 0,
                                j = d - a + h,
                                m = a + o - u.height - d + h,
                                n = e - (i.precedance === "y" || i.x === i.y ? f : 0) - (k.y === "center" ? q / 2 : 0),
                                p = i.y === "center";
                            b ? (h = A && A.corner && A.corner.precedance === "x" ? g : 0, n = (i.y === "top" ? 1 : -1) * e - h, v.top += j > 0 ? j : m > 0 ? -m : 0, v.top = Math.max(-w.offset.top + u.offset.top + (h && A.corner.x === "center" ? A.offset : 0), a - n, Math.min(Math.max(-w.offset.top + u.offset.top + u.height, a + n), v.top))) : (j > 0 && (i.y !== "top" || m > 0) ? v.top -= n + c : m > 0 && (i.y !== "bottom" || j > 0) && (v.top -= (p ? -n : n) + c), v.top < 0 && -v.top > m && (v.top = a));
                            return v.top - a
                        }
                    },
                    H;
                if (a.isArray(e) && e.length === 2) k = {
                    x: "left",
                    y: "top"
                }, v = {
                    left: e[0],
                    top: e[1]
                };
                else if (e === "mouse" && (b && b.pageX || G.event.pageX)) k = {
                    x: "left",
                    y: "top"
                }, b = (b && (b.type === "resize" || b.type === "scroll") ? G.event : b && b.pageX && b.type === "mousemove" ? b : h && h.pageX && (l.mouse || !b || !b.pageX) ? {
                    pageX: h.pageX,
                    pageY: h.pageY
                } : !l.mouse && G.origin && G.origin.pageX && s.show.distance ? G.origin : b) || b || G.event || h || {}, v = {
                    top: b.pageY,
                    left: b.pageX
                };
                else {
                    e === "event" ? b && b.target && b.type !== "scroll" && b.type !== "resize" ? e = G.target = a(b.target) : e = G.target : e = G.target = a(e.jquery ? e : F.target), e = a(e).eq(0);
                    if (e.length === 0) return y;
                    e[0] === document || e[0] === window ? (p = g.iOS ? window.innerWidth : e.width(), q = g.iOS ? window.innerHeight : e.height(), e[0] === window && (v = {
                        top: (u || e).scrollTop(),
                        left: (u || e).scrollLeft()
                    })) : e.is("area") && g.imagemap ? v = g.imagemap(e, k, E.enabled ? m : c) : e[0].namespaceURI === "http://www.w3.org/2000/svg" && g.svg ? v = g.svg(e, k) : (p = e.outerWidth(), q = e.outerHeight(), v = g.offset(e, w)), v.offset && (p = v.width, q = v.height, x = v.flipoffset, v = v.offset);
                    if (g.iOS > 3.1 && g.iOS < 4.1 || g.iOS >= 4.3 && g.iOS < 4.33 || !g.iOS && t) H = a(window), v.left -= H.scrollLeft(), v.top -= H.scrollTop();
                    v.left += k.x === "right" ? p : k.x === "center" ? p / 2 : 0, v.top += k.y === "bottom" ? q : k.y === "center" ? q / 2 : 0
                }
                v.left += l.x + (i.x === "right" ? -n : i.x === "center" ? -n / 2 : 0), v.top += l.y + (i.y === "bottom" ? -o : i.y === "center" ? -o / 2 : 0), E.enabled ? (u = {
                    elem: u,
                    height: u[(u[0] === window ? "h" : "outerH") + "eight"](),
                    width: u[(u[0] === window ? "w" : "outerW") + "idth"](),
                    scrollLeft: t ? 0 : u.scrollLeft(),
                    scrollTop: t ? 0 : u.scrollTop(),
                    offset: u.offset() || {
                        left: 0,
                        top: 0
                    }
                }, w = {
                    elem: w,
                    scrollLeft: w.scrollLeft(),
                    scrollTop: w.scrollTop(),
                    offset: w.offset() || {
                        left: 0,
                        top: 0
                    }
                }, v.adjusted = {
                    left: E.horizontal !== "none" ? E.left(v.left) : 0,
                    top: E.vertical !== "none" ? E.top(v.top) : 0
                }, v.adjusted.left + v.adjusted.top && D.attr("class", D[0].className.replace(/ui-tooltip-pos-\w+/i, j + "-pos-" + i.abbrev())), x && v.adjusted.left && (v.left += x.left), x && v.adjusted.top && (v.top += x.top)) : v.adjusted = {
                    left: 0,
                    top: 0
                }, r.originalEvent = a.extend({}, b), D.trigger(r, [y, v, u.elem || u]);
                if (r.isDefaultPrevented()) return y;
                delete v.adjusted, d === c || !C || isNaN(v.left) || isNaN(v.top) || e === "mouse" || !a.isFunction(f.effect) ? D.css(v) : a.isFunction(f.effect) && (f.effect.call(D, y, a.extend({}, v)), D.queue(function(b) {
                    a(this).css({
                        opacity: "",
                        height: ""
                    }), a.browser.msie && this.style.removeAttribute("filter"), b()
                })), B = 0;
                return y
            },
            redraw: function() {
                if (y.rendered < 1 || C) return y;
                var a = s.position.container,
                    b, c, d, e;
                C = 1, s.style.height && D.css("height", s.style.height), s.style.width ? D.css("width", s.style.width) : (D.css("width", "").addClass(q), c = D.width() + 1, d = D.css("max-width") || "", e = D.css("min-width") || "", b = (d + e).indexOf("%") > -1 ? a.width() / 100 : 0, d = (d.indexOf("%") > -1 ? b : 1) * parseInt(d, 10) || c, e = (e.indexOf("%") > -1 ? b : 1) * parseInt(e, 10) || 0, c = d + e ? Math.min(Math.max(c, e), d) : c, D.css("width", Math.round(c)).removeClass(q)), C = 0;
                return y
            },
            disable: function(b) {
                "boolean" !== typeof b && (b = !D.hasClass(l) && !G.disabled), y.rendered ? (D.toggleClass(l, b), a.attr(D[0], "aria-disabled", b)) : G.disabled = !!b;
                return y
            },
            enable: function() {
                return y.disable(c)
            },
            destroy: function() {
                var c = r[0],
                    d = a.attr(c, t),
                    e = r.data("qtip");
                y.destroyed = b, y.rendered && (D.stop(1, 0).remove(), a.each(y.plugins, function() {
                    this.destroy && this.destroy()
                })), clearTimeout(y.timers.show), clearTimeout(y.timers.hide), Q();
                if (!e || y === e) a.removeData(c, "qtip"), s.suppress && d && (a.attr(c, "title", d), r.removeAttr(t)), r.removeAttr("aria-describedby");
                r.unbind(".qtip-" + v), delete i[y.id];
                return r
            }
        })
    }

    function w(b) {
        var e;
        if (!b || "object" !== typeof b) return c;
        if (b.metadata === d || "object" !== typeof b.metadata) b.metadata = {
            type: b.metadata
        };
        if ("content" in b) {
            if (b.content === d || "object" !== typeof b.content || b.content.jquery) b.content = {
                text: b.content
            };
            e = b.content.text || c, !a.isFunction(e) && (!e && !e.attr || e.length < 1 || "object" === typeof e && !e.jquery) && (b.content.text = c);
            if ("title" in b.content) {
                if (b.content.title === d || "object" !== typeof b.content.title) b.content.title = {
                    text: b.content.title
                };
                e = b.content.title.text || c, !a.isFunction(e) && (!e && !e.attr || e.length < 1 || "object" === typeof e && !e.jquery) && (b.content.title.text = c)
            }
        }
        if ("position" in b)
            if (b.position === d || "object" !== typeof b.position) b.position = {
                my: b.position,
                at: b.position
            };
        if ("show" in b)
            if (b.show === d || "object" !== typeof b.show) b.show.jquery ? b.show = {
                target: b.show
            } : b.show = {
                event: b.show
            };
        if ("hide" in b)
            if (b.hide === d || "object" !== typeof b.hide) b.hide.jquery ? b.hide = {
                target: b.hide
            } : b.hide = {
                event: b.hide
            };
        if ("style" in b)
            if (b.style === d || "object" !== typeof b.style) b.style = {
                classes: b.style
            };
        a.each(g, function() {
            this.sanitize && this.sanitize(b)
        });
        return b
    }

    function v() {
        v.history = v.history || [], v.history.push(arguments);
        if ("object" === typeof console) {
            var a = console[console.warn ? "warn" : "log"],
                b = Array.prototype.slice.call(arguments),
                c;
            typeof arguments[0] === "string" && (b[0] = "qTip2: " + b[0]), c = a.apply ? a.apply(console, b) : a(b)
        }
    }
    "use strict";
    var b = !0,
        c = !1,
        d = null,
        e, f, g, h, i = {},
        j = "ui-tooltip",
        k = "ui-widget",
        l = "ui-state-disabled",
        m = "div.qtip." + j,
        n = j + "-default",
        o = j + "-focus",
        p = j + "-hover",
        q = j + "-fluid",
        r = "-31000px",
        s = "_replacedByqTip",
        t = "oldtitle",
        u;
    f = a.fn.qtip = function(g, h, i) {
        var j = ("" + g).toLowerCase(),
            k = d,
            l = a.makeArray(arguments).slice(1),
            m = l[l.length - 1],
            n = this[0] ? a.data(this[0], "qtip") : d;
        if (!arguments.length && n || j === "api") return n;
        if ("string" === typeof g) {
            this.each(function() {
                var d = a.data(this, "qtip");
                if (!d) return b;
                m && m.timeStamp && (d.cache.event = m);
                if (j !== "option" && j !== "options" || !h) d[j] && d[j].apply(d[j], l);
                else if (a.isPlainObject(h) || i !== e) d.set(h, i);
                else {
                    k = d.get(h);
                    return c
                }
            });
            return k !== d ? k : this
        }
        if ("object" === typeof g || !arguments.length) {
            n = w(a.extend(b, {}, g));
            return f.bind.call(this, n, m)
        }
    }, f.bind = function(d, j) {
        return this.each(function(k) {
            function r(b) {
                function d() {
                    p.render(typeof b === "object" || l.show.ready), m.show.add(m.hide).unbind(o)
                }
                if (p.cache.disabled) return c;
                p.cache.event = a.extend({}, b), p.cache.target = b ? a(b.target) : [e], l.show.delay > 0 ? (clearTimeout(p.timers.show), p.timers.show = setTimeout(d, l.show.delay), n.show !== n.hide && m.hide.bind(n.hide, function() {
                    clearTimeout(p.timers.show)
                })) : d()
            }
            var l, m, n, o, p, q;
            q = a.isArray(d.id) ? d.id[k] : d.id, q = !q || q === c || q.length < 1 || i[q] ? f.nextid++ : i[q] = q, o = ".qtip-" + q + "-create", p = y.call(this, q, d);
            if (p === c) return b;
            l = p.options, a.each(g, function() {
                this.initialize === "initialize" && this(p)
            }), m = {
                show: l.show.target,
                hide: l.hide.target
            }, n = {
                show: a.trim("" + l.show.event).replace(/ /g, o + " ") + o,
                hide: a.trim("" + l.hide.event).replace(/ /g, o + " ") + o
            }, /mouse(over|enter)/i.test(n.show) && !/mouse(out|leave)/i.test(n.hide) && (n.hide += " mouseleave" + o), m.show.bind("mousemove" + o, function(a) {
                h = {
                    pageX: a.pageX,
                    pageY: a.pageY,
                    type: "mousemove"
                }, p.cache.onTarget = b
            }), m.show.bind(n.show, r), (l.show.ready || l.prerender) && r(j)
        })
    }, g = f.plugins = {
        Corner: function(a) {
            a = ("" + a).replace(/([A-Z])/, " $1").replace(/middle/gi, "center").toLowerCase(), this.x = (a.match(/left|right/i) || a.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (a.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase();
            var b = a.charAt(0);
            this.precedance = b === "t" || b === "b" ? "y" : "x", this.string = function() {
                return this.precedance === "y" ? this.y + this.x : this.x + this.y
            }, this.abbrev = function() {
                var a = this.x.substr(0, 1),
                    b = this.y.substr(0, 1);
                return a === b ? a : a === "c" || a !== "c" && b !== "c" ? b + a : a + b
            }, this.clone = function() {
                return {
                    x: this.x,
                    y: this.y,
                    precedance: this.precedance,
                    string: this.string,
                    abbrev: this.abbrev,
                    clone: this.clone
                }
            }
        },
        offset: function(b, c) {
            function j(a, b) {
                d.left += b * a.scrollLeft(), d.top += b * a.scrollTop()
            }
            var d = b.offset(),
                e = b.closest("body")[0],
                f = c,
                g, h, i;
            if (f) {
                do f.css("position") !== "static" && (h = f.position(), d.left -= h.left + (parseInt(f.css("borderLeftWidth"), 10) || 0) + (parseInt(f.css("marginLeft"), 10) || 0), d.top -= h.top + (parseInt(f.css("borderTopWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0), !g && (i = f.css("overflow")) !== "hidden" && i !== "visible" && (g = f)); while ((f = a(f[0].offsetParent)).length);
                g && g[0] !== e && j(g, 1)
            }
            return d
        },
        iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || c,
        fn: {
            attr: function(b, c) {
                if (this.length) {
                    var d = this[0],
                        e = "title",
                        f = a.data(d, "qtip");
                    if (b === e && f && "object" === typeof f && f.options.suppress) {
                        if (arguments.length < 2) return a.attr(d, t);
                        f && f.options.content.attr === e && f.cache.attr && f.set("content.text", c);
                        return this.attr(t, c)
                    }
                }
                return a.fn["attr" + s].apply(this, arguments)
            },
            clone: function(b) {
                var c = a([]),
                    d = "title",
                    e = a.fn["clone" + s].apply(this, arguments);
                b || e.filter("[" + t + "]").attr("title", function() {
                    return a.attr(this, t)
                }).removeAttr(t);
                return e
            }
        }
    }, a.each(g.fn, function(c, d) {
        if (!d || a.fn[c + s]) return b;
        var e = a.fn[c + s] = a.fn[c];
        a.fn[c] = function() {
            return d.apply(this, arguments) || e.apply(this, arguments)
        }
    }), a.ui || (a["cleanData" + s] = a.cleanData, a.cleanData = function(b) {
        for (var c = 0, d;
            (d = b[c]) !== e; c++) try {
            a(d).triggerHandler("removeqtip")
        } catch (f) {}
        a["cleanData" + s](b)
    }), f.version = "nightly", f.nextid = 0, f.inactiveEvents = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "), f.zindex = 15e3, f.defaults = {
        prerender: c,
        id: c,
        overwrite: b,
        suppress: b,
        content: {
            text: b,
            attr: "title",
            title: {
                text: c,
                button: c
            }
        },
        position: {
            my: "top left",
            at: "bottom right",
            target: c,
            container: c,
            viewport: c,
            adjust: {
                x: 0,
                y: 0,
                mouse: b,
                resize: b,
                method: "flip flip"
            },
            effect: function(b, d, e) {
                a(this).animate(d, {
                    duration: 200,
                    queue: c
                })
            }
        },
        show: {
            target: c,
            event: "mouseenter",
            effect: b,
            delay: 90,
            solo: c,
            ready: c,
            autofocus: c
        },
        hide: {
            target: c,
            event: "mouseleave",
            effect: b,
            delay: 0,
            fixed: c,
            inactive: c,
            leave: "window",
            distance: c
        },
        style: {
            classes: "",
            widget: c,
            width: c,
            height: c,
            def: b
        },
        events: {
            render: d,
            move: d,
            show: d,
            hide: d,
            toggle: d,
            visible: d,
            hidden: d,
            focus: d,
            blur: d
        }
    }, g.ajax = function(a) {
        var b = a.plugins.ajax;
        return "object" === typeof b ? b : a.plugins.ajax = new z(a)
    }, g.ajax.initialize = "render", g.ajax.sanitize = function(a) {
        var b = a.content,
            c;
        b && "ajax" in b && (c = b.ajax, typeof c !== "object" && (c = a.content.ajax = {
            url: c
        }), "boolean" !== typeof c.once && c.once && (c.once = !!c.once))
    }, a.extend(b, f.defaults, {
        content: {
            ajax: {
                loading: b,
                once: b
            }
        }
    }), g.tip = function(a) {
        var b = a.plugins.tip;
        return "object" === typeof b ? b : a.plugins.tip = new B(a)
    }, g.tip.initialize = "render", g.tip.sanitize = function(a) {
        var c = a.style,
            d;
        c && "tip" in c && (d = a.style.tip, typeof d !== "object" && (a.style.tip = {
            corner: d
        }), /string|boolean/i.test(typeof d.corner) || (d.corner = b), typeof d.width !== "number" && delete d.width, typeof d.height !== "number" && delete d.height, typeof d.border !== "number" && d.border !== b && delete d.border, typeof d.offset !== "number" && delete d.offset)
    }, a.extend(b, f.defaults, {
        style: {
            tip: {
                corner: b,
                mimic: c,
                width: 6,
                height: 6,
                border: b,
                offset: 0
            }
        }
    }), g.modal = function(a) {
        var b = a.plugins.modal;
        return "object" === typeof b ? b : a.plugins.modal = new C(a)
    }, g.modal.initialize = "render", g.modal.sanitize = function(a) {
        a.show && (typeof a.show.modal !== "object" ? a.show.modal = {
            on: !!a.show.modal
        } : typeof a.show.modal.on === "undefined" && (a.show.modal.on = b))
    }, g.modal.zindex = f.zindex + 1e3, g.modal.focusable = ["a[href]", "area[href]", "input", "select", "textarea", "button", "iframe", "object", "embed", "[tabindex]", "[contenteditable]"], a.extend(b, f.defaults, {
        show: {
            modal: {
                on: c,
                effect: b,
                blur: b,
                stealfocus: b,
                escape: b
            }
        }
    })
});

// /presentation/plugins/autocomplete/jquery.autocomplete.min.js //

/**
 *  Ajax Autocomplete for jQuery, version 1.2.7
 *  (c) 2013 Tomas Kirda
 *
 *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
 *  For details, see the web site: http://www.devbridge.com/projects/autocomplete/jquery/
 */
    (function(e) {
    "function" === typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
    function g(a, b) {
        var c = function() {},
            c = {
                autoSelectFirst: !1,
                appendTo: "body",
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: "auto",
                minChars: 1,
                maxHeight: 300,
                deferRequestBy: 0,
                params: {},
                formatResult: g.formatResult,
                delimiter: null,
                zIndex: 9999,
                type: "GET",
                noCache: !1,
                onSearchStart: c,
                onSearchComplete: c,
                containerClass: "autocomplete-suggestions",
                tabDisabled: !1,
                dataType: "text",
                lookupFilter: function(a, b, c) {
                    return -1 !==
                        a.value.toLowerCase().indexOf(c)
                },
                paramName: "query",
                transformResult: function(a) {
                    return "string" === typeof a ? e.parseJSON(a) : a
                }
            };
        this.element = a;
        this.el = e(a);
        this.suggestions = [];
        this.badQueries = [];
        this.selectedIndex = -1;
        this.currentValue = this.element.value;
        this.intervalId = 0;
        this.cachedResponse = [];
        this.onChange = this.onChangeInterval = null;
        this.isLocal = this.ignoreValueChange = !1;
        this.suggestionsContainer = null;
        this.options = e.extend({}, c, b);
        this.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        };
        this.initialize();
        this.setOptions(b)
    }
    var h = {
        extend: function(a, b) {
            return e.extend(a, b)
        },
        createNode: function(a) {
            var b = document.createElement("div");
            b.innerHTML = a;
            return b.firstChild
        }
    };
    g.utils = h;
    e.Autocomplete = g;
    g.formatResult = function(a, b) {
        var c = "(" + b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "g"), "\\$1") + ")";
        return a.value.replace(RegExp(c, "gi"), "<strong>$1</strong>")
    };
    g.prototype = {
        killerFn: null,
        initialize: function() {
            var a = this,
                b = "." + a.classes.suggestion,
                c = a.classes.selected,
                d = a.options,
                f;
            a.element.setAttribute("autocomplete", "off");
            a.killerFn = function(b) {
                0 === e(b.target).closest("." + a.options.containerClass).length && (a.killSuggestions(), a.disableKillerFn())
            };
            if (!d.width || "auto" === d.width) d.width = a.el.outerWidth();
            a.suggestionsContainer = g.utils.createNode('<div class="' + d.containerClass + '" style="position: absolute; display: none;"></div>');
            f = e(a.suggestionsContainer);
            f.appendTo(d.appendTo).width(d.width);
            f.on("mouseover.autocomplete", b, function() {
                a.activate(e(this).data("index"))
            });
            f.on("mouseout.autocomplete", function() {
                a.selectedIndex = -1;
                f.children("." + c).removeClass(c)
            });
            f.on("click.autocomplete", b, function() {
                a.select(e(this).data("index"), !1)
            });
            a.fixPosition();
            if (window.opera) a.el.on("keypress.autocomplete", function(b) {
                a.onKeyPress(b)
            });
            else a.el.on("keydown.autocomplete", function(b) {
                a.onKeyPress(b)
            });
            a.el.on("keyup.autocomplete", function(b) {
                a.onKeyUp(b)
            });
            a.el.on("blur.autocomplete", function() {
                a.onBlur()
            });
            a.el.on("focus.autocomplete", function() {
                a.fixPosition()
            })
        },
        onBlur: function() {
            this.enableKillerFn()
        },
        setOptions: function(a) {
            var b = this.options;
            h.extend(b, a);
            if (this.isLocal = e.isArray(b.lookup)) b.lookup = this.verifySuggestionsFormat(b.lookup);
            e(this.suggestionsContainer).css({
                "max-height": b.maxHeight + "px",
                width: b.width + "px",
                "z-index": b.zIndex
            })
        },
        clearCache: function() {
            this.cachedResponse = [];
            this.badQueries = []
        },
        clear: function() {
            this.clearCache();
            this.currentValue = null;
            this.suggestions = []
        },
        disable: function() {
            this.disabled = !0
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var a;
            "body" === this.options.appendTo &&
                (a = this.el.offset(), e(this.suggestionsContainer).css({
                    top: a.top + this.el.outerHeight() + "px",
                    left: a.left + "px"
                }))
        },
        enableKillerFn: function() {
            e(document).on("click.autocomplete", this.killerFn)
        },
        disableKillerFn: function() {
            e(document).off("click.autocomplete", this.killerFn)
        },
        killSuggestions: function() {
            var a = this;
            a.stopKillSuggestions();
            a.intervalId = window.setInterval(function() {
                a.hide();
                a.stopKillSuggestions()
            }, 300)
        },
        stopKillSuggestions: function() {
            window.clearInterval(this.intervalId)
        },
        onKeyPress: function(a) {
            if (!this.disabled &&
                !this.visible && 40 === a.keyCode && this.currentValue) this.suggest();
            else if (!this.disabled && this.visible) {
                switch (a.keyCode) {
                    case 27:
                        this.el.val(this.currentValue);
                        this.hide();
                        break;
                    case 9:
                    case 13:
                        if (-1 === this.selectedIndex) {
                            this.hide();
                            return
                        }
                        this.select(this.selectedIndex, 13 === a.keyCode);
                        if (9 === a.keyCode && !1 === this.options.tabDisabled) return;
                        break;
                    case 38:
                        this.moveUp();
                        break;
                    case 40:
                        this.moveDown();
                        break;
                    default:
                        return
                }
                a.stopImmediatePropagation();
                a.preventDefault()
            }
        },
        onKeyUp: function(a) {
            var b = this;
            if (!b.disabled) {
                switch (a.keyCode) {
                    case 38:
                    case 40:
                        return
                }
                clearInterval(b.onChangeInterval);
                if (b.currentValue !== b.el.val())
                    if (0 < b.options.deferRequestBy) b.onChangeInterval = setInterval(function() {
                        b.onValueChange()
                    }, b.options.deferRequestBy);
                    else b.onValueChange()
            }
        },
        onValueChange: function() {
            var a;
            clearInterval(this.onChangeInterval);
            this.currentValue = this.element.value;
            a = this.getQuery(this.currentValue);
            this.selectedIndex = -1;
            this.ignoreValueChange ? this.ignoreValueChange = !1 : a.length < this.options.minChars ?
                this.hide() : this.getSuggestions(a)
        },
        getQuery: function(a) {
            var b = this.options.delimiter;
            if (!b) return e.trim(a);
            a = a.split(b);
            return e.trim(a[a.length - 1])
        },
        getSuggestionsLocal: function(a) {
            var b = a.toLowerCase(),
                c = this.options.lookupFilter;
            return {
                suggestions: e.grep(this.options.lookup, function(d) {
                    return c(d, a, b)
                })
            }
        },
        getSuggestions: function(a) {
            var b, c = this,
                d = c.options,
                f = d.serviceUrl;
            (b = c.isLocal ? c.getSuggestionsLocal(a) : c.cachedResponse[a]) && e.isArray(b.suggestions) ? (c.suggestions = b.suggestions, c.suggest()) :
                c.isBadQuery(a) || (d.params[d.paramName] = a, !1 !== d.onSearchStart.call(c.element, d.params) && (e.isFunction(d.serviceUrl) && (f = d.serviceUrl.call(c.element, a)), e.ajax({
                    url: f,
                    data: d.ignoreParams ? null : d.params,
                    type: d.type,
                    dataType: d.dataType
                }).done(function(b) {
                    c.processResponse(b, a);
                    d.onSearchComplete.call(c.element, a)
                })))
        },
        isBadQuery: function(a) {
            for (var b = this.badQueries, c = b.length; c--;)
                if (0 === a.indexOf(b[c])) return !0;
            return !1
        },
        hide: function() {
            this.visible = !1;
            this.selectedIndex = -1;
            e(this.suggestionsContainer).hide()
        },
        suggest: function() {
            if (0 === this.suggestions.length) this.hide();
            else {
                var a = this.options.formatResult,
                    b = this.getQuery(this.currentValue),
                    c = this.classes.suggestion,
                    d = this.classes.selected,
                    f = e(this.suggestionsContainer),
                    g = "";
                e.each(this.suggestions, function(d, e) {
                    g += '<div class="' + c + '" data-index="' + d + '">' + a(e, b) + "</div>"
                });
                f.html(g).show();
                this.visible = !0;
                this.options.autoSelectFirst && (this.selectedIndex = 0, f.children().first().addClass(d))
            }
        },
        verifySuggestionsFormat: function(a) {
            return a.length && "string" ===
                typeof a[0] ? e.map(a, function(a) {
                    return {
                        value: a,
                        data: null
                    }
                }) : a
        },
        processResponse: function(a, b) {
            var c = this.options,
                d = c.transformResult(a, b);
            d.suggestions = this.verifySuggestionsFormat(d.suggestions);
            c.noCache || (this.cachedResponse[d[c.paramName]] = d, 0 === d.suggestions.length && this.badQueries.push(d[c.paramName]));
            b === this.getQuery(this.currentValue) && (this.suggestions = d.suggestions, this.suggest())
        },
        activate: function(a) {
            var b = this.classes.selected,
                c = e(this.suggestionsContainer),
                d = c.children();
            c.children("." +
                b).removeClass(b);
            this.selectedIndex = a;
            return -1 !== this.selectedIndex && d.length > this.selectedIndex ? (a = d.get(this.selectedIndex), e(a).addClass(b), a) : null
        },
        select: function(a, b) {
            var c = this.suggestions[a];
            c && (this.el.val(c), this.ignoreValueChange = b, this.hide(), this.onSelect(a))
        },
        moveUp: function() {
            -1 !== this.selectedIndex && (0 === this.selectedIndex ? (e(this.suggestionsContainer).children().first().removeClass(this.classes.selected), this.selectedIndex = -1, this.el.val(this.currentValue)) : this.adjustScroll(this.selectedIndex -
                1))
        },
        moveDown: function() {
            this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1)
        },
        adjustScroll: function(a) {
            var b = this.activate(a),
                c, d;
            b && (b = b.offsetTop, c = e(this.suggestionsContainer).scrollTop(), d = c + this.options.maxHeight - 25, b < c ? e(this.suggestionsContainer).scrollTop(b) : b > d && e(this.suggestionsContainer).scrollTop(b - this.options.maxHeight + 25), this.el.val(this.getValue(this.suggestions[a].value)))
        },
        onSelect: function(a) {
            var b = this.options.onSelect;
            a = this.suggestions[a];
            this.el.val(this.getValue(a.value));
            e.isFunction(b) && b.call(this.element, a)
        },
        getValue: function(a) {
            var b = this.options.delimiter,
                c;
            if (!b) return a;
            c = this.currentValue;
            b = c.split(b);
            return 1 === b.length ? a : c.substr(0, c.length - b[b.length - 1].length) + a
        },
        dispose: function() {
            this.el.off(".autocomplete").removeData("autocomplete");
            this.disableKillerFn();
            e(this.suggestionsContainer).remove()
        }
    };
    e.fn.autocomplete = function(a, b) {
        return 0 === arguments.length ? this.first().data("autocomplete") : this.each(function() {
            var c =
                e(this),
                d = c.data("autocomplete");
            if ("string" === typeof a) {
                if (d && "function" === typeof d[a]) d[a](b)
            } else d && d.dispose && d.dispose(), d = new g(this, a), c.data("autocomplete", d)
        })
    }
});

// /presentation/plugins/modals/fs_modals.js //

$(document).ready(function() {
    $("#js_login_modal .js_message").hide();
    $('#js_login_modal form').submit(function() {
        $("#js_login_modal .js_message").fadeOut();
        if ($('input[name="is_ajax"]').val() == 'Y') {
            $.ajax({
                type: "POST",
                url: '/account/login',
                data: $(this).serialize(),
                success: function(data) {
                    if (data == 'success') {
                        hide_modal('#js_login_modal');
                    } else {
                        $("#js_login_modal .js_message p").addClass('error');
                        $("#js_login_modal .js_message p").text(data);
                        $("#js_login_modal .js_message").fadeIn();
                    }
                }
            });
        }
    });
    $("#js_signup_modal").on("opened", function() {
        $.get('/ajaxactions/newsletter_subscription', function(data) {
            $(".js_modal_dynamic_content", "#js_signup_modal").html(data);
        }, "html");
    });
    $('#js_modal_mask, body').on('click', '.js_modal', function() {
        var modal_id = $(this).data('modal_id');
        var modal = $('#' + modal_id);
        var foundry = $(this).data('foundry');
        var license = $(this).data('license');
        if (license !== undefined) {
            modal = create_license_modal(license, foundry, $(this));
        } else {
            if ($(this).data('info') !== undefined) {
                modal.data('info', $(this).data('info'));
            }
            show_this_modal(modal);
            set_go_back_button($(this), modal);
        }
        return false;
    });
    $('#js_modal_mask').on('click', 'ul.modal_navigation li', function() {
        var panel = $('a', this).attr('href');
        var container = $(panel).parents('.js_modal_tabs');
        $('.modal_navigation li').removeClass('selected');
        $(this).addClass('selected');
        $('.modal_tab_panel:visible').hide();
        $(panel).fadeIn(100);
        $('#js_modal_mask .modal:visible').center();
        return false;
    });
});

// /presentation/plugins/modals/modals.js //

$(window).load(function() {
    modal_container = $('#js_modal_mask');
    $(modal_container).hide();
    $('.modal').hide();
    $('.js_show_modal').click(function() {
        var modal_id = $(this).data('modal');
        if (show_this_modal($('#' + modal_id))) {
            $(this).parents('.modal').hide();
            return false;
        }
    });
    $("#js_modal_mask").click(function(event) {
        event.stopPropagation();
    });
    $(window).resize(function() {
        $('.modal:visible').center();
    });
    $('#js_modal_mask').on("click", ".js_modal_remove", function() {
        var modal = $(this).parents('.modal');
        remove_this_modal(modal);
        return false;
    });
    $('#js_modal_mask').on("click", ".js_modal_hide", function() {
        hide_modal(modal_container);
        return false;
    });
    $("form.js_show_loader").submit(function(event) {
        show_generic_loader('Give us a second while we submit the form.');
    });
});
jQuery.fn.center = function() {
    this.css("position", "fixed");
    this.css("top", "50%");
    this.css("left", "50%");
    this.css("margin-left", "-" + Math.max(0, this.outerWidth() / 2) + "px");
    this.css("margin-top", "-" + Math.max(0, this.outerHeight() / 2) + "px");
    return this;
};

function show_generic_loader(message) {
    if (message === undefined) {
        message = "Working...";
    }
    $('.modal').hide();
    $(modal_container).fadeIn(300, function() {
        $('#generic_loader_container').fadeIn(300);
        $('#generic_loader_container .loading_spinner').fadeIn(300);
    });
    if (message !== undefined) {
        $('#generic_loader_container p').text(message);
        blink('#generic_loader_container p');
    } else {
        $('#generic_loader_container p').hide();
    }
}

function change_generic_loader_message(message) {
    if (message !== undefined) {
        $('#generic_loader_container p').text(message);
        blink('#generic_loader_container p');
    } else {
        $('#generic_loader_container p').hide();
    }
}

function hide_generic_loader() {
    $('.modal').hide();
    $(modal_container).fadeOut(500, function() {
        $('.loading_spinner').fadeOut(500);
        $('#generic_loader_container').hide();
    });
}

function show_this_modal(modal) {
    if (modal.length) {
        $('.modal').hide();
        $(modal_container).fadeIn(600, function() {
            $(modal).fadeIn(100).center();
        });
        $('body').css('overflow-y', 'hidden');
        $(modal).trigger("opened", ["Custom", "Event"]);
        return true;
    } else {
        return false;
    }
}

function hide_modal(modal) {
    hide_generic_loader();
    $('.modal').hide();
    $(modal_container).fadeOut();
    $('body').css('overflow', 'auto');
    do_clean_up();
}

function remove_this_modal(modal) {
    hide_generic_loader();
    $('.modal').hide();
    $(modal_container).fadeOut(200, function() {
        $(modal).remove();
    });
    $('body').css('overflow', 'auto');
    do_clean_up();
}

function do_clean_up() {
    $('.license_modal').remove();
    delete_back_buttons();
}

function delete_back_buttons() {
    $('.js_delete_on_close').remove();
}

function set_go_back_button(button, modal, button_text, placement) {
    button_text = typeof button_text !== 'undefined' ? button_text : 'Go Back';
    placement = typeof placement !== 'undefined' ? placement : 'pre';
    console.log(button);
    if (button.hasClass('js_go_back_to_this_modal')) {
        if ($('.js_delete_on_close', modal).length) {} else {
            parent_modal_id = button.parents('.modal').attr('id');
            parent_license_token = button.parents('.modal').data('license');
            if (parent_modal_id !== undefined) {
                gobackbutton = "<a href='#' data-modal_id='" + parent_modal_id + "' class='generic_submit soft js_modal js_delete_on_close'>Go Back</a>&nbsp;";
            } else if (parent_license_token !== undefined) {
                gobackbutton = "<a href='#' data-license='" + parent_license_token + "' class='generic_submit soft js_modal js_delete_on_close'>Go Back</a>&nbsp;";
            }
            if (gobackbutton !== undefined) {
                if (placement === 'pre') {
                    $(".generic_submit:first", modal).before(gobackbutton);
                } else {
                    $(".generic_submit:last", modal).after(gobackbutton);
                }
            }
        }
    }
}

function blink(id, count) {
    count = count || 100;
    for (i = 0; i < count; i++) {
        $(id).fadeTo('slow', 0.1).fadeTo('slow', 1.0);
    }
}

// /presentation/js/_site.js //

if ((window.devicePixelRatio === undefined ? 1 : window.devicePixelRatio) > 1) document.cookie = 'IS_RETINA=1;path=/';
$(document).ready(function() {
    update_user_content();
    $('#font_search').autocomplete({
        serviceUrl: '/widgets/autocomplete/family_and_vendor_names',
        onSelect: function(suggestion) {
            window.location.href = suggestion.url + suggestion.slug;
        }
    });
    $(".js_tip").qtip({
        content: {
            attr: 'rel'
        },
        position: {
            my: 'bottom center',
            at: 'top center'
        },
        show: {
            event: 'click',
            effect: function(offset) {
                $(this).fadeIn(300);
            }
        },
        hide: {
            fixed: true,
            delay: 300
        }
    });
    $(".js_tip").click(function() {
        return false;
    });
    $(".js_track_events").on("click", "a", function(event) {
        var href = $(this).attr("href");
        var target = $(this).attr("target");
        if ($(this).data("category")) {
            var category = $(this).data("category");
        } else if ($(this).parent('.js_track_events').data('category')) {
            var category = $(this).parent('.js_track_events').data('category');
        } else {
            var category = "unknown_category";
        };
        if ($(this).data("label")) {
            var label = $(this).data("label");
        } else {
            var label = $(this).attr("href");
        };
        if ($(this).data("action")) {
            var action = $(this).data("action");
        } else {
            var action = "click";
        };
        event.preventDefault();
        _gaq.push(["_trackEvent", category, action, label, , false]);
        setTimeout(function() {
            window.open(href, (!target ? "_self" : target));
        }, 300);
    });
    $.ajax({
        url: '/ajaxactions/get_ads',
        dataType: 'json',
        async: false,
        success: function(data) {
            if (data.sidebar_banner) {
                var sidebarhtml;
                sidebarhtml = "<a " + data.sidebar_banner['extras'] + " href='" + data.sidebar_banner['url'] + "'>";
                sidebarhtml += "<img src='" + data.sidebar_banner['image'] + "' alt='" + data.sidebar_banner['alt'] + "' width='" + data.sidebar_banner['width'] + "' height='" + data.sidebar_banner['height'] + "'/>";
                sidebarhtml += "</a>";
                $(sidebarhtml).appendTo('#sidebar_ad_container');
            };
            if (data.bottom_banner) {
                var bottombannerhtml;
                bottombannerhtml = "<a " + data.bottom_banner['extras'] + " href='http://" + data.bottom_banner['url'] + "'>";
                bottombannerhtml += "<img src='" + data.bottom_banner['image'] + "' alt='" + data.bottom_banner['alt'] + "' width='" + data.bottom_banner['width'] + "' height='" + data.bottom_banner['height'] + "' style='width: 100%; height: auto'/>";
                bottombannerhtml += "</a>";
                $(bottombannerhtml).appendTo('#bottom_banner_ad_container');
            };
            if (data.top_banner) {
                var topbannerhtml;
                topbannerhtml = "<a " + data.top_banner['extras'] + " href='http://" + data.top_banner['url'] + "'>";
                topbannerhtml += "<img src='" + data.top_banner['image'] + "' alt='" + data.top_banner['alt'] + "' width='" + data.top_banner['width'] + "' height='" + data.top_banner['height'] + "' />";
                topbannerhtml += "</a>";
                $(topbannerhtml).appendTo('#top_banner_ad_container');
            };
            if (data.generator_banner) {
                var generator_bannerhtml;
                generator_bannerhtml = "<a " + data.generator_banner['extras'] + " href='http://" + data.generator_banner['url'] + "'>";
                generator_bannerhtml += "<img src='" + data.generator_banner['image'] + "' alt='" + data.generator_banner['alt'] + "' width='" + data.generator_banner['width'] + "' height='" + data.generator_banner['height'] + "' />";
                generator_bannerhtml += "</a>";
                $(generator_bannerhtml).appendTo('#generator_banner_container');
            };
        }
    });
    $('.js_click_to_hide_show_container .js_hide_show .hide').hide();
    $('.js_click_to_hide_show_container .js_click_to_hide_show').click(function() {
        container = $(this).parents('.js_click_to_hide_show_container');
        $('.js_hide_show', container).slideToggle('normal', function() {
            if ($(this).is(':hidden')) {
                var state = "closed";
                $('span.js_click_to_hide_show:first-child', container).html("&#x25B6;");
            } else {
                var state = "open";
                $('span.js_click_to_hide_show:first-child', container).html("&#x25BC;");
            }
        });
    });
    $('#download_link, .download_link a').click(function() {
        if ($(this).data('urlname') !== undefined && $(this).data('urlname') !== '') {
            window.location.replace("/fonts/download/" + $(this).data('urlname'));
            return false;
        }
    });
});

function update_user_content() {
    $.getJSON('/ajaxactions/user_update', function(data) {
        if (data['username'] != '') {
            $('#supernavigation').append("<a id='login_logout' href='/account/logout'>Logout " + data['username'] + "</a>");
            $('#supernavigation').prepend("<a href='/account'>Your Account</a>");
        } else {
            $('#supernavigation').prepend("<a id='login_logout' class='js_modal' data-modal_id='js_login_modal' href='/account/login'>Login</a>");
        }
    });
}
