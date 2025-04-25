// TinyMCE editor configuration
tinymce.init({
    selector: 'textarea',
    plugins: [
        // Core editing features
        'anchor', 'autolink', 'charmap', 'codesample', 'searchreplace', 'table','code','preview'],
    toolbar: 'tablemergecells | undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Kerbie R. Villanueva',
    mergetags_list: [
        { value: 'Kerbie R. Villanueva', title: 'First Name' },
        { value: 'kerbievillanueva1108@gmail.com', title: 'Email' },
    ],
    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
 
});
