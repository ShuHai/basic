\用于转义特殊字符，比如原来/b/匹配b，/\b/则匹配\b字符

^匹配输入的开始,$匹配输入的结束,*匹配前面一个表达式或者多次，+匹配前面一个表达式1次或者多次,?匹配0次或者1次

修饰符： i 对大小写不敏感，g全局匹配，m多行匹配

常见方法: compile,exec,test.string支持正则的方法:search,match,replace,split

验证数字:^[0-9]*$, 验证n位数字:^\d{n}$,如手机号^\d{11}$,汉字:^[\u4e00-\u9fa5]{0,}$,一年十二个月:^(0?[1-9]|1[0-2])$,
一个月的31天: ^((0?[1-9])|((1|2)[0-9])|30|31)$, qq: [1-9][0-9]{4,},英文和数字：^[A-Za-z0-9]+$,26个英文字母组成的字符串：^[A-Za-z]+$,26个大写英文字母组成的字符串：^[A-Z]+$,由26个小写英文字母组成的字符串：^[a-z]+$,验证Email地址：“^w+[-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$”

eg.var reg = new RegExp("^[0-9]*$");
   if(!reg.test(obj.value)){
        alert("请输入数字!");
    }

从jQuery中抠出来的
// Used for trimming whitespace
trimLeft = /^\s+/,
trimRight = /\s+$/,