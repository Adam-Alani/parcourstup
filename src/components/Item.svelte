<script lang="ts">
    export let item = undefined;
</script>
<div class="mx-2 my-2 cursor-pointer ">
    <div class="">
        <p class="  text font-semibold ">{item["School"]} <span class=" text-xs font-normal">{item["DetFiliere"]} </span></p>
        <p class=" text-xs font-normal">{item["VertDetFormation"]}</p>
        <span class=" text-xs font-normal">{item["Region"]}, {item["Academy"]} {item["CodeDep"]},  </span>
    </div>
</div>
