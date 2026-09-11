export function getTechIcon(iconUrl, size = 24)
{
    if(!iconUrl)
        return null;
      return (
    <img
      src={iconUrl}
      alt=''
      width={size}
      height={size}
      loading="lazy"
      className="object-contain"
    />
  )
}
export async function fetchTechnologies() {
  const response = await fetch('/data.json')
  if (!response.ok) {
    throw new Error('Unable to load technologies.')
  }
  return response.json()
}
 //stack callouts

 export function addTechToStack(stack, tech) {
   return [...stack, tech]
 }
 
 export function removeTechFromStack(stack, tech) {
   return stack.filter((item) => item.id !== tech.id)
 }
 
 export function removeAllFromStack(stack) {
   return []
 }