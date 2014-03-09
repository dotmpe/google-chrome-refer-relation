Refer Relation
==============
The `refer-relation` add-on for Google Chrome [GC]
should use a HTTP request header to identify the relationship that is traversed.

Discusssion
  - The 'rel' value indicates a class of relationships. 
  - Besides having a class identifier, the relation is directional, which is 
    normally forward, but reversed when the 'rev' attribute is used.
  - This normally means that the object of the relation is the resource 
    mentioned in HTTP Referer, while the subject is the currently enclosed 
    resource. Vice-versa for relationships indicated by 'rev'.

Specs
  - It should follow latest html5 guidelines for the 'rel' attribute,
    in particular nofollow if not already implemented by GC
  - There is no known HTML header, X-Relationship is used in communication

