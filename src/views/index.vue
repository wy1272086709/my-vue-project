<script type="text/javascript" async="" src="https://union.jd.com/wl.jd.com/joya.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="//wl.jd.com/boomerang.min.js"></script>

<style scoped>
    @import '../styles/common.css';
    @import '../styles/app.css';
    @import '../styles/jd_style1.css';
    @import '../styles/jd_style2.css';
    @import '../styles/jd_style3.css';
    @import '../styles/jd_style4.css';
    @import '../styles/jd_style5.css';
    @import '../styles/jd_style6.css';
    @import '../styles/jd_style7.css';
</style>
<template>
    <div class="main-container">
        <div class="app-wrapper">
            <div class="app-content">
                <div style="overflow: hidden; min-width: 1040px;">
                    <div class="superSearch">
                        <Header :cats="categoriesArr" :cats2="categoriesArr2" :cats3="categoriesArr3" @liClick="goodListChange"  @sortGoodRes="searchGoods"></Header>
                        </div>
                        <div class="card-box clearfix">
                            <template v-for="item in items">
                                    <Goods :item="item"></Goods>
                            </template>
                        </div>
                        <div class="pagination-container pagination-box">
                            <Page :total.sync="total" :page-size="pageSize" show-total show-elevator show-total show-sizer :page-size-opts="opts"  @on-change="changePage" 
                            @on-page-size-change="changePageSize"></Page>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Ajax from '../libs/ajax.js'
    import Goods from '../component/Goods'
    import Header from '../component/header'
    const JD_BASE_API = '/';
    export default {
        name: 'index-jd',
        components: {
            Goods,
            Header,
        },
        data() {
            return {
                categoriesArr: [],
                categoriesArr2: [],
                categoriesArr3: [],
                items: [],
                total: 0,
                opts: [60],
                pageSize: 60,
                // current: 1,
                params: {
                    "pageNo":1,"pageSize":60,"searchUUID":"866e0d6cc3894f69b74c38ee5fb28c99","data":{"bonusIds":null,"categoryId":null,"cat2Id":null,"cat3Id":null,"deliveryType":0,"fromCommissionRatio":null,"toCommissionRatio":null,"fromPrice":null,"toPrice":null,"hasCoupon":0,"isHot":null,"isPinGou":0,"isZY":0,"isCare":0,"lock":0,"orientationFlag":0,"sort":null,"sortName":null,"key":"","searchType":"st3","keywordType":"kt0"}
                }
            }
        },
        mounted() {
            this.initGoods()
        },
        methods: {
            changePage(current) {
                this.current = current
                this.params.pageNo = current
                this.initGoods()
            },
            changePageSize() {

            },
            // 发送ajax 请求的
            initGoods(catIndex) {
                let promise = Ajax.postJsonData(JD_BASE_API+'index/index/getJdGoodList', this.params);
                promise.then(data=> {
                    console.log('this:', this);
                    console.log('params:', this.params)
                    let res = data.data
                    if(this.params.data.cat3Id!=null) {
                        //this.setDefaultCssStyle(this.categoriesArr3)
                        if (catIndex!== undefined && catIndex !=-1) {
                            this.changeCatsCsssStyle(this.categoriesArr3, catIndex);
                        }
                    }else if (this.params.data.cat2Id!=null) {
                        this.categoriesArr3 = res.data.catList3 !=null ? res.data.catList3: [];
                        this.setDefaultCssStyle(this.categoriesArr3);
                        if(catIndex !== undefined && catIndex != -1) {
                            this.changeCatsCsssStyle(this.categoriesArr2, catIndex);
                        }
                    }else if (this.params.data.categoryId!=null) {
                        this.categoriesArr2 = res.data.catList2 !=null ? res.data.catList2: [];
                        this.setDefaultCssStyle(this.categoriesArr2);
                        if (catIndex!== undefined && catIndex!=-1) {
                            this.changeCatsCsssStyle(this.categoriesArr, catIndex);
                        }
                    } else {
                        this.categoriesArr = res.data.catList1;
                        this.setDefaultCssStyle(this.categoriesArr)
                        if (catIndex!== undefined && catIndex!=-1) {
                            this.changeCatsCsssStyle(this.categoriesArr, catIndex);
                        }
                    }
                    console.log('categoriesArr3:', this.categoriesArr3)
                    this.items = res.data.unionGoods;
                    this.total = res.data.page.totalCount;
                })
            },
            setDefaultCssStyle(categoriesArr) {
                for (let i = categoriesArr.length - 1; i >= 0; i--) {
                    if (!categoriesArr[i].cssStyle) {
                        categoriesArr[i].cssStyle = 'el-checkbox checkli subtext'
                    }
                }
            },
            initGoodsList() {
                let promise = Ajax.postJsonData(JD_BASE_API, this.params);
                promise.then((data)=> {
                    let res = data.data
                    this.items = res.data.unionGoods;
                    this.total = res.data.page.totalCount;
                    console.log(this.items)
                })
            },
            goodListChange(param) {
                console.log(param)
                let catIndex = param.cateIdIndex
                let level    = param.categoryLevel

                if (catIndex !== undefined) {
                    if (level == 1) {
                        if (catIndex!= -1) {
                            this.params.data.categoryId = this.categoriesArr[catIndex].id
                        } else {
                            this.params.data.categoryId = null
                        }
                        this.params.data.cat2Id = null
                        this.params.data.cat3Id = null
                        this.initGoods(catIndex);
                    } else if(level == 2) {
                        if (catIndex!= -1) {
                            this.params.data.cat2Id = this.categoriesArr2[catIndex].id
                        }else {
                            this.params.data.cat2Id = null;
                        }
                        this.params.data.cat3Id = null
                        this.initGoods(catIndex);
                    } else if (level == 3) {
                        if (catIndex!= -1) {
                            this.params.data.cat3Id = this.categoriesArr3[catIndex].id
                        } else {
                            this.params.data.cat3Id = null
                        }
                        this.initGoods(catIndex);
                    }
                }
            },
            changeCatsCsssStyle(cats, index) {
                for (let i = cats.length - 1; i >= 0; i--) {
                    if (i == index) {
                        cats[i].cssStyle = 'el-checkbox checkli subtext active';
                    } else {
                        cats[i].cssStyle = 'el-checkbox checkli subtext';
                    }
                }
            },
            searchGoods(params) {
                let data = this.params.data
                let keys = Object.keys(params);
                for (let i = keys.length - 1; i >= 0; i--) {
                    let key = keys[i];
                    if (key != 'pageNo') {
                        data[key] = params[key]; 
                    } else {
                        this.params.pageNo = params[key]
                    }
                }
                this.initGoods();
            }
        }
    }
</script>
