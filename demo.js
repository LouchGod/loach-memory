function foo() {
    const str = "sss";
    function bar() {
        console.log(str);
    }
    return bar;
}
