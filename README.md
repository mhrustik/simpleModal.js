# simpleModal.js

The simple javascrpit library for rendering modal windows

# install

-import simpleModal.js from /dist [Babel YES]
or
-import simpleModal.js from /js [Babel NO]

-import simpleModal.css from /css [Minified NO]

# Example

```
   <button class="open-modal" data-target="#modal_1" type="button">
      <span>open modal</span>
   </button>
```

```
   <div id="modal_1" class="modal-wrap">
      <div class="modal-content">
         <div class="modal modal-xs">
            <div class="head">
               <button data-close="#modal_1" type="button">
                  <span>close</span>
               </button>
            </div>
            <div class="body">
               ...
            </div>
            <div class="foot">
               <button data-close="#modal_1" type="button">
                  <span>close</span>
               </button>
            </div>
         </div>
      </div>
   </div>
```

```
   <script>
      new SimpleModal({ id: "modal_1" });
   </script>
```

# other call methods

```
   <script>
      const modal = new SimpleModal({ id: "modal_1" });
      modal.show() - The function for show a modal window.
      modal.hide() - The function for hide a modal window.
   </script>
```
