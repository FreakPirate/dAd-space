import { SubmitTransaction } from '../generated/Gravity/Gravity'
import { Gravatar } from '../generated/schema'

export function handleNewTransaction(event: SubmitTransaction): void {
  let gravatar = new Gravatar(event.params.adId)
  gravatar.adId=event.params.adId
  gravatar.spendLimit=event.params.spendLimit
  gravatar.imageUrl=event.params.imageUrl
  gravatar.imagesize=event.params.imagesize
  gravatar.cta=event.params.cta
  gravatar.desc=event.params.desc
  gravatar.status=event.params.status
  gravatar.personid = new Array<string>()
  let array =  gravatar.personid
  for(var i=0;i<event.params.personid.length;i++){
    array.push(event.params.personid[i])
  }
  gravatar.personid = array
  //}
  gravatar.clickTag=event.params._clickTag
  gravatar.publisherId=event.params._publisherId
  gravatar.save()
}

// export function handleUpdatedGravatar(event: UpdatedGravatar): void {
//   let id = event.params.id.toHex()
//   let gravatar = Gravatar.load(id)
//   if (gravatar == null) {
//     gravatar = new Gravatar(id)
//   },where:{personid:["abc"]}
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }
