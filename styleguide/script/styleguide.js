(function (window, document, $) {

  //Show/hide code
  $(".show-code").click(function() {
    $(this).next(".component--source").toggleClass("element-invisible");
  });
  $(".hide-code").click(function() {
    $(this).parent(".component--source").addClass("element-invisible");
    $('html, body').animate({
      scrollTop: $(this).parents(".component--item").offset().top
    }, 500);
  });

  //List components
  $(".show-subitem").click(function(){
    $(this).next().toggleClass("element-invisible");
    $(this).toggleClass("active");
  });
  $(".sub").children('a').click(function(){
    $(".sub").children('a').removeClass("active");
    $(this).addClass("active");
  });
  $(".show-list").click(function(){
    $(".component--list").addClass("active");
    $(".show-list").hide();
    $(".hide-list").addClass("active").show();
  });
  $(".hide-list").click(function(){
    $(".component--list").removeClass("active");
    $(".hide-list").removeClass("active").hide();
    $(".show-list").show();
  });

  SyntaxHighlighter.all()

}(this, this.document, this.jQuery));
