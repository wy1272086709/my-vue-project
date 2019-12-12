<template>
<div class="filter-box">
    <div class="category">
        <div clstag="pageclick|keycount|MyPromote_Sku_1542182131260|28" class="type-box" :style="style"><span class="title">一级类目</span>
            <div class="operation" @click="showAllCategory()">
                <!----><a class="order-btn auxiliary-text"><span>{{btnText}}<i :class="arrowClass"></i></span></a></div>
            <div class="all-data">
                <li data-index="-1" :class="class_category_qb1" @click="changeGoodList(-1,1)">全部</li>
                <ul class="el-checkbox-group" style="margin: 8px 0px 8px -30px; display: inline-block;">
                	<template v-for="(cat, k) in categorys">
                    	<li :label="cat.id" :id="cat.id" :key="k" :data-index="k" :data-catid="cat.id" :title="cat.categoryName" :class="cat.cssStyle" @click="changeGoodList(k, 1)">{{cat.categoryName}}</li>
                	</template>
                </ul>
            </div>
        </div>
        <div clstag="pageclick|keycount|MyPromote_Sku_1542182131260|29" class="type-box" :style="category2_css">
            <span class="title">二级类目</span>
            <div class="operation">    
            </div>
            <div class="all-data">
                <li data-index="-1" :class="class_category_qb2" @click="changeGoodList(-1,2)">全部</li>
                <ul class="el-checkbox-group" style="margin: 8px 0px 8px -30px; display: inline-block;">
                    <li v-for="(cat2, m) in categorys2" :key="m" :label="cat2.id" :data-index="m" :title="cat2.categoryName" :class="cat2.cssStyle" @click="changeGoodList(m, 2)">
                    {{cat2.categoryName}}</li>
                </ul>
            </div>
        </div>
        <div clstag="pageclick|keycount|MyPromote_Sku_1542182131260|29" class="type-box" :style="category3_css">
            <span class="title">三级类目</span>
            <div class="operation">    
            </div>
            <div class="all-data">
                <li data-index="-1" :class="class_category_qb3" @click="changeGoodList(-1,3)">全部</li>
                <ul class="el-checkbox-group" style="margin: 8px 0px 8px -30px; display: inline-block;">
                    <li v-for="(cat3, h) in categorys3"  :key="h*500+1" :label="cat3.id" :data-index="h" :title="cat3.categoryName" 
                    :class="cat3.cssStyle" @click="changeGoodList(h, 3)">{{cat3.categoryName}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="checkbox-area">
        <div class="category">
            <div class="type-box" style="max-height: 40px;"><span class="title">属性</span>
                <div class="operation">
                    <!---->
                    <!---->
                </div>
                <div class="all-data">
                    <!---->
                    <div role="group" aria-label="checkbox-group" class="el-checkbox-group checked-group">
                        <label role="checkbox" :class="isZYLabelClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|31">
                            <span aria-checked="mixed" :class="isZYSpanClass">
                                <span class="el-checkbox__inner"></span>
                                <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="isZY" @click="attrGoodList('isZY')">
                            </span>
                            <span class="el-checkbox__label">
                                <span>自营</span>
                            </span>
                        </label>

                        <label role="checkbox" :class="isPinGouLabelClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|32">
                            <span aria-checked="mixed" :class="isPinGouSpanClass">
                                <span class="el-checkbox__inner"></span>
                                <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="isPinGou" @click="attrGoodList('isPinGou')">
                            </span>
                            <span class="el-checkbox__label">
                                <span>拼购</span>
                            </span>
                        </label>

                        <label role="checkbox" :class="orientationFlagLabelClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|33">
                            <span aria-checked="mixed" :class="orientationFlagSpanClass">
                                <span class="el-checkbox__inner"></span>
                                <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="orientationFlag" @click="attrGoodList('orientationFlag')">
                            </span>
                            <span class="el-checkbox__label">
                                <span>定向计划</span>
                            </span>
                        </label>

                        <label role="checkbox" :class="hasCouponLabelClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|34">
                            <span aria-checked="mixed" :class="hasCouponSpanClass">
                                <span class="el-checkbox__inner"></span>
                                <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="hasCoupon" @click="attrGoodList('hasCoupon')">
                            </span>
                            <span class="el-checkbox__label">
                                <span>优惠券</span>
                            </span>
                        </label>

                        <label role="checkbox" :class="deliveryTypeLabelClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|35">
                            <span aria-checked="mixed" :class="deliveryTypeSpanClass">
                                <span class="el-checkbox__inner"></span>
                                <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="deliveryType" @click="attrGoodList('deliveryType')">
                            </span>
                            <span class="el-checkbox__label">
                                <span>京配</span>
                            </span>
                        </label>

                        <label role="checkbox" :class="isCareLabelClass" clstag="">
                            <span aria-checked="mixed" :class="isCareSpanClass">
                                <span class="el-checkbox__inner"></span>
                                <input type="checkbox" aria-hidden="true" class="el-checkbox__original" value="isCare" @click="attrGoodList('isCare')">
                            </span>
                            <span class="el-checkbox__label">
                                <span>爱心东东</span>
                            </span>
                        </label>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
    <div class="conditionCheck-box">
    	<span class="title">排序</span>
        <div class="all-data" style="padding-right: 0px; background-color: rgb(252, 252, 252);">
            <div class="el-button-group" style="vertical-align: top;">
                <button type="button" :class="zongheClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|36" @click="sortGoodList({sortName: null})">
                    <span>综合</span>
                </button>
                <span>
                    <button type="button" :class="wlCommissionClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|37" aria-describedby="el-popover-7082" tabindex="0" @click="sortGoodList({sortName: 'wlCommission'})">
                        <span>佣金<i class="el-icon-back"></i></span>
                    </button>
                </span>
                <button type="button" :class="wlCommissionShareClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|38" @click="sortGoodList({sortName: 'wlCommissionShare'})">
                    <span>佣金比例<i class="el-icon-back"></i></span>
                </button>
            </div>
            <!--
            <span>
                <div class="commission el-popover__reference" aria-describedby="el-popover-3629" tabindex="0">
                    <div class="input el-input el-input--suffix">
                        <input type="text" autocomplete="off" maxlength="2" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|39" class="el-input__inner">
                        <span class="el-input__suffix">
                            <span class="el-input__suffix-inner">
                                <span style="line-height: 1.8;">%</span>
                            </span>
                        </span>
                    </div>
                    <span class="text-moddie"> ~</span>
                    <div class="input el-input el-input--suffix">
                        <input type="text" autocomplete="off" maxlength="3" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|39" class="el-input__inner">
                        <span class="el-input__suffix"><span class="el-input__suffix-inner"><span style="line-height: 1.8;">%</span>
                                </span>
                            </span>
                    </div>
                </div>
            </span>
            
            <span class="price">
                <span>
                    <div role="tooltip" id="el-popover-7371" aria-hidden="true" class="el-popover el-popper" tabindex="0" style="display: none;">
                        <span>按商品原价从高到低排序</span></div>
                        <button type="button" class="el-button auxiliary-text sort text-flag el-button--default el-popover__reference" aria-describedby="el-popover-7371" tabindex="0" style="vertical-align: top;">
                            <span>价格</span>
                        </button>
                </span>
                <span class="union-sort">
                    <i clstag="pageclick|keycount|MyPromote_Sku_1542182131260|41" class="sort-cell ascending"></i>
                    <i clstag="pageclick|keycount|MyPromote_Sku_1542182131260|40" class="sort-cell descending"></i>
                </span>
            </span>
            <span>
                <div class="commission price-range el-popover__reference" aria-describedby="el-popover-9052" tabindex="0">
                    <div class="input el-input el-input--prefix">
                        <input type="text" autocomplete="off" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|42" class="el-input__inner" />
                        <span class="el-input__prefix">
                            <span style="line-height: 1.8;">￥</span>
                        </span>
                    </div>
                    <span class="text-moddie"> ~</span>
                    <div class="input el-input el-input--prefix">
                        <input type="text" autocomplete="off" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|42" class="el-input__inner">
                        <span class="el-input__prefix">
                            <span style="line-height: 1.8;">￥</span>
                        </span>
                    </div>
                </div>
            </span>
        -->
            <div class="el-button-group group-flag">
                <button type="button" :class="inOrderCount30DaysClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|43" style="border: none;" @click="sortGoodList({sortName:'inOrderCount30Days'})">
                    <span>30天引入订单量<i class="el-icon-back"></i></span></button><button type="button" :class="inOrderComm30DaysClass" clstag="pageclick|keycount|MyPromote_Sku_1542182131260|44" style="border: none;" @click="sortGoodList({sortName:'inOrderComm30Days'})">
                    <span>30天支出佣金<i class="el-icon-back"></i></span></button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
	export default {
		data() {
			return {
                style: "max-height: 62px;",
                btnText: "收起",
                arrowClass: "el-icon-arrow-down",
                // 
                zongheClass: 'el-button auxiliary-text sort el-button--default active',
                // 佣金比例,默认
                wlCommissionShareClass: 'el-button auxiliary-text sort el-button--default',
                // 佣金
                wlCommissionClass: 'el-button auxiliary-text sort el-button--default  el-popover__reference',
                // 30天引入订单量
                inOrderCount30DaysClass: 'el-button auxiliary-text sort el-button--default',
                // 30天支出佣金
                inOrderComm30DaysClass: 'el-button auxiliary-text sort el-button--default',
                searchParams: {},
                isZYLabelClass: 'el-checkbox subtext',
                isZYSpanClass: 'el-checkbox__input',
                isPinGouLabelClass: 'el-checkbox subtext',
                isPinGouSpanClass: 'el-checkbox__input',
                orientationFlagLabelClass: 'el-checkbox subtext',
                orientationFlagSpanClass: 'el-checkbox__input',
                hasCouponLabelClass: 'el-checkbox subtext',
                hasCouponSpanClass: 'el-checkbox__input',
                deliveryTypeLabelClass: 'el-checkbox subtext',
                deliveryTypeSpanClass: 'el-checkbox__input',
                isCareLabelClass: 'el-checkbox subtext',
                isCareSpanClass: 'el-checkbox__input',
                category2_css: 'display:none;max-height:62px',
                category3_css: 'display:none;max-height:62px',
                categorys: [],
                categorys2: [],
                categorys3: [],
                class_category_qb1: 'checkall subtext active',
                class_category_qb2: 'checkall subtext active',
                class_category_qb3: 'checkall subtext active'
			}
		},
		props: ['cats', 'cats2', 'cats3'],
        watch: {
            cats() {
                this.categorys = this.cats
            },
            cats2() {
                this.categorys2 = this.cats2
            },
            cats3: {
                handler(val) {
                    this.categorys3 = val
                    console.log('handler:',this.categorys3)
                },
                immediate: true,
                deep: true
            }
        },
        methods: {
            showAllCategory() {
                if (this.style == 'max-height: 62px;') {
                    this.style = 'max-height: 10000px;'
                } else {
                    this.style = 'max-height: 62px;'
                }
                if (this.btnText == "收起") {
                    this.btnText = '更多'
                } else {
                    this.btnText = "收起"
                }
                if (this.arrowClass == 'el-icon-arrow-down') {
                    this.arrowClass = 'el-icon-arrow-up'
                } else {
                    this.arrowClass = 'el-icon-arrow-down'
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
            changeGoodList(index, categoryLevel) {
                // 这里直接改变对应的属性值，看看效果.
                /*console.log('cats:',this.cats)
                console.log('index:', index)
                if (categoryLevel == 1) {
                    this.changeCatsCsssStyle(this.cats, index)
                } else if (categoryLevel == 2) {
                    this.changeCatsCsssStyle(this.cats2, index)
                    console.log(this.cats2);
                } else if (categoryLevel == 3) {
                    this.changeCatsCsssStyle(this.cats3, index)
                    console.log(this.cats3);
                }*/
                if (categoryLevel == 1) {
                    this.category2_css = 'max-height:62px';
                    this.category3_css = 'display:none;max-height:62px';
                    if (index == -1) {
                        this.class_category_qb1 = 'checkall subtext active'
                        this.class_category_qb2 = 'checkall subtext active'
                        this.class_category_qb3 = 'checkall subtext active'
                    } else {
                        this.class_category_qb1 = 'checkall subtext'
                    }
                } else if(categoryLevel == 2){
                    this.category3_css = 'max-height:62px';
                    if (index == -1) {
                        this.class_category_qb2 = 'checkall subtext active'
                        this.class_category_qb3 = 'checkall subtext active'
                    } else {
                        this.class_category_qb2 = 'checkall subtext'
                    }
                } else if (categoryLevel == 3) {
                    if (index == -1) {
                        this.class_category_qb3 = 'checkall subtext active'
                    } else {
                        this.class_category_qb3 = 'checkall subtext'
                    }
                }
                this.$emit('liClick', {cateIdIndex: index, categoryLevel: categoryLevel})
            },
            //根据属性来筛选列表
            attrGoodList(param) {
                let attrArr = [
                    'isZY','isPinGou', 'orientationFlag', 'hasCoupon', 'deliveryType', 'isCare'
                ];
                let labelClass = param+"LabelClass";
                let spanClass  = param+"SpanClass";
                let pos = this[labelClass].indexOf('is-checked')
                let spanPos = this[spanClass].indexOf('is-checked')
                var value = ''
                if (pos== -1) {
                    this[labelClass]+=" is-checked"
                    value = 1;
                } else {
                    this[labelClass] = this[labelClass].substring(0, pos)
                    value = 0;
                }
                if (spanPos== -1) {
                    this[spanClass]+=" is-checked"
                } else {
                    this[spanClass] = this[spanClass].substring(0, spanPos)
                }
                this.searchParams[param] = value
                this.searchParams.pageNo = 1
                this.$emit('sortGoodRes', this.searchParams)
            },
            sortGoodList(param) {
                if (param.sortName !==undefined) {
                    if (param.sortName === null) {
                        var f = 'zongheClass'
                        if (this[f].indexOf('active')== -1) {
                            this[f]+='active'
                        }
                        console.log(this[f])
                    } else {
                        var f = param.sortName+"Class";
                        let pos = this[f].indexOf('active')
                        // 没有active字符串
                        if (pos!==-1) {
                            this[f] = this[f].substring(0, pos)
                            this.zongheClass+='active'
                        } else {
                            this[f]+= ' active';
                        }
                    }
                    let sortNameArr = [
                        'zongheClass',
                        'wlCommissionShareClass',
                        'wlCommissionClass',
                        'inOrderCount30DaysClass',
                        'inOrderComm30DaysClass'
                    ];
                    for (var i = sortNameArr.length - 1; i >= 0; i--) {
                        if (sortNameArr[i]!=f) {
                            let m = sortNameArr[i];
                            let h = this[m].indexOf('active');
                            if (h!==-1) {
                                this[sortNameArr[i]] = this[m].substring(0, h);
                            }
                        }
                    }
                    this.searchParams.sortName = param.sortName
                    this.$emit('sortGoodRes', this.searchParams)
                }
            }
        }
	}



</script>
<style>
	
</style>


