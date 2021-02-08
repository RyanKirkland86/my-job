

$(document).ready(() => {
  $(document.body).on('click', '.application', (event) => {
    event.preventDefault();

    const appId = event.target.getAttribute('data-id');
    // const userId; // how do I get req.params.id ??

    console.log(appId)
    // console.log(userId)

    window.location.pathname = (`/dashboard/1/${appId}`)
  })
    


})