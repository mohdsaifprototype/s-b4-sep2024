let imgNum = 112;

for (let i = 0; i < 10; i++) {
  mohit.innerHTML += `
<div class="col-4">
  <div class="card text-center">
    <img
      class="card-img-top"
      src="https://picsum.photos/id/${imgNum}/600/400"
      alt="Picsum img 112"
    />
    <div class="card-body">
      <h4 class="card-title">Picsum img ${imgNum}</h4>
      <p class="card-text">Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </div>
</div>
`;
  imgNum++;
}
