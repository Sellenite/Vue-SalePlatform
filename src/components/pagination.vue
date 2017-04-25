<template>
    <nav>
        <ul class="pagination">
            <li :class="{'disabled': currentFix == 1}" @click="setCurrent(1)"><a href="javascript:;"> 首页 </a></li>
            <li :class="{'disabled': currentFix == 1}" @click="setCurrent(currentFix - 1)"><a href="javascript:;"> 上一页 </a></li>
            <li v-for="p in grouplist" :class="{'active': currentFix == p.val}" @click="setCurrent(p.val)"><a href="javascript:;"> {{ p.text }} </a></li>
            <li :class="{'disabled': currentFix == page}" @click="setCurrent(currentFix + 1)"><a href="javascript:;"> 下一页</a></li>
            <li :class="{'disabled': currentFix == page}" @click="setCurrent(page)"><a href="javascript:;"> 尾页 </a></li>
        </ul>
        <ul class="displayArea">
            <li><span> 共 {{ total }}  条数据 </span></li>
            <li><span> 每页显示 {{ display }}  条数据 </span></li>
            <li><span> 共 {{ page }} 页 </span></li>
            <li><span> 当前第 {{ currentFix }} 页 </span></li>
        </ul>
    </nav>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        /* 数据总条数 */
        total: {
            type: Number,
            default: 0
        },
        /* 每页显示条数 */
        display: {
            type: Number,
            default: 10
        },
        /* 当前页码 */
        current: {
            type: Number,
            default: 1
        },
        /* 分页条数--奇数 */
        pagegroup: {
            type: Number,
            default: 5
        }
    },
    data() {
        return {
            currentFix: this.current
        };
    },
    computed: {
        /* 计算修改分页索引条数 */
        normalizedPagegroup: function () {
            var v = this.pagegroup;
            v = v > 0 ? v : 5;
            return v % 2 === 1 ? v : v + 1;
        },
        /* 总页数 */
        page: function () {
            return Math.ceil(this.total / this.display);
        },
        /* 获取分页页码 */
        grouplist: function () {
            var len = this.page;
            var temp = [];
            var list = [];
            var count = Math.floor(this.normalizedPagegroup / 2);
            var center = this.currentFix;
            if (len <= this.normalizedPagegroup) {
                while (len--) { temp.push({ text: this.page - len, val: this.page - len }); };
                return temp;
            }
            while (len--) { temp.push(this.page - len); };
            var idx = temp.indexOf(center);
            (idx < count) && (center = center + count - idx);
            (this.currentFix > this.page - count) && (center = this.page - count);
            temp = temp.splice(center - count - 1, this.normalizedPagegroup);
            do {
                var t = temp.shift();
                list.push({
                    text: t,
                    val: t
                });
            } while (temp.length);
            if (this.page > this.normalizedPagegroup) {
                (this.currentFix > count + 1) && list.unshift({ text: '...', val: list[0].val - 1 });
                (this.currentFix < this.page - count) && list.push({ text: '...', val: list[list.length - 1].val + 1 });
            }
            return list;
        }
    },
    methods: {
        setCurrent: function (idx) {
            if (this.currentFix !== idx && idx > 0 && idx < this.page + 1) {
                this.currentFix = idx;
                this.$emit('pagechange', this.currentFix);
            }
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .pagination
        list-style: none
        font-size: 0
        li
            display: inline-block
            padding: 6px 12px
            border: 1px solid #ddd
            font-size: 13px
            border-right: none
            cursor: pointer
            &:last-child
                border-right: 1px solid #ddd
            a
                text-decoration: none
                color: #656565
            &.active
                background: #42b983
                a
                    color: #FFF
    .displayArea
        list-style: none
</style>