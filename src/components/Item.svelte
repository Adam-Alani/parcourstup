<script lang="ts">
    export let item = undefined;
</script>
<div class="mx-2 my-2 cursor-pointer">
    <div  class=" truncate">
        <p class="customItem_name  text font-semibold ">{item["School"]} <span class=" text-xs font-normal">{item["DetFormation"]} </span></p>
        <p class=" text-xs font-normal">{item["VertDetFormation"]}</p>
        <span class=" text-xs font-normal">{item["Region"]}, {item["Academy"]} {item["CodeDep"]},  </span>
    </div>
</div>
