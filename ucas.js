Vue.component('grade', {
    props: ["name"],
    template: `<p v-html = "name" ></p>`
}) 

var app = new Vue({
    el: "#app",
    data: {
        title       : "UCAS Calculator",
        
        pass        : "Pass",
        merit       : "Merit",
        distinction : "Distinction",
        fail        : "Fail",
        
        passNumber        : 0 ,
        meritNumber       : 0 ,
        distinctionNumber : 0 ,
        failNumber        : 0 ,

        total : 0 ,
        mark  : " "
    },
    methods: {
        getNumbers: function(i){
                return [...Array(i).keys()]
        },
        getTotal: function(){
            return this.total = 3 * this.passNumber + 6 * this.meritNumber + 9 * this.distinctionNumber
        },
        evaluate: function(){
            if (this.failNumber >= 1) {
                this.mark =  " Failed "
            } else if (this.total >= 54 && this.total <= 69) {
                this.mark = " PPP "
            } else if (this.total >= 72 && this.total <= 87) {
                this.mark = " MPP "
            } else if (this.total >= 90 && this.total <= 105) {
                this.mark = " MMP "
            } else if (this.total >= 108 && this.total <= 114) {
                this.mark = " MMM "
            } else if (this.total >= 117 && this.total <= 123) {
                this.mark = " DMM "
            } else if (this.total >= 126 && this.total <= 132) {
                this.mark = " DDM "
            } else if (this.total >= 135 && this.total <= 141) {
                this.mark = " DDD "
            } else if (this.total >= 144 && this.total <= 150) {
                this.mark = " D*DD "
            } else if (this.total >= 153 && this.total <= 159) {
                this.mark = " D*D*D "
            } else if (this.total >= 162) {
                this.mark = " D*D*D* "
            } else {
                this.mark = " undefined "
            }
            return this.mark
        }
    }
})