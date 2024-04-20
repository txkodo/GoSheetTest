<script>
    let w = $state(0)
</script>
<div class="card" bind:clientWidth={w} style="font-size: {w}px;">
    <div class="txt">
        {w}
    </div>
</div>
<style>
.card {
    position: relative;
        background-color: crimson;
        overflow: hidden;
        width: 100%;
        aspect-ratio: 3/2;
        border-radius: 0.03em;
}
.txt {
    position: absolute;
    top:auto;
    bottom: 0;
    left: auto;
    right: 0;
    font-size: 0.2em;
}
</style>