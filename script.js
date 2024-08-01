$(function() {
  // your code here
  const accordion = $('.accordion')
  const accordionHeader = $('.accordion-header')
  const accordionContent = $('.accordion-content')
  const todosContainer = $('.todos')
  const list = $('ul')


  accordion.find(accordionHeader).on('click',function(){
    $(this).next(accordionContent).slideToggle()
  })

  todosContainer.find('button').on('click', async function(){
    const todoList = await getData()
    console.log(todoList.todos)

    $.each(todoList.todos, function(index){
      list.append("<li>list item</li>")
      $('li').last().text(todoList.todos[index].todo)
    })
  })

function getData() {
    return new Promise((resolve,reject) => {
      $.ajax({
        url:'https://dummyjson.com/todos',
        type: 'GET',
        success: function(response){
          resolve(response)
        },
        errer: function(error){
          reject(error)
        }
      })
    })
  }



})