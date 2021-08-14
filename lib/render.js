  
  export default function render(container, data, options) {
    const { context, type } = options;
    const { labels, datasets } = data;
  
    const ctx = document.getElementById(container).getContext(context);
    new Chart(ctx, {
      type,
      data: { labels, datasets}
    });
  }