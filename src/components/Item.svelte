<script lang="ts">
    export let item = undefined;
</script>
<div class="mx-2 my-2 cursor-pointer ">
    <div>
        <hr>
        <p class="mt-2 text font-semibold ">{item["School"]} <span class=" text-xs font-normal ">{item["DetFiliere"]} </span></p>
        <p class=" text-xs font-normal">{item["VertDetFormation"]}</p>
        <span class=" text-xs font-light">{item["Region"]}, {item["Academy"]} {item["CodeDep"]},  </span>
    </div>
</div>
