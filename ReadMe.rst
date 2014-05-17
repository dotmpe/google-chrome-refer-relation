Refer Relation
==============
The `refer-relation` add-on for Google Chrome [GC]
should use a HTTP request header to identify the relationship that is traversed.
For use in special tracking proxy, or perhaps site.

Discusssion
  - The 'rel' value indicates a class of relationships. 
  - Besides indicating some class identifier, the relation is directional, which is 
    normally forward, but reversed when the 'rev' attribute is used.
  - It normally indicates that the object of the relation is the resource 
    mentioned in HTTP Referer, while the subject is the currently requested
    resource. Vice-versa for relationships indicated by 'rev'.
  - There is an obvious limit to the use of this in HTTP xmission, but it is an
    easy way to keep the server oblivious to the served content while tracking
    types of navigation.

Specs
  - It should follow latest html5 guidelines for the 'rel' attribute,
    in particular nofollow if not already implemented by GC
  - There is no known HTML header, X-Relationship is used in communication

Status
  - It does add a header, but does not resolve to the clicked anchor yet.
    Also, handler catches all requests. Not just the resource request triggered
    by the user.

Changelog
---------
2014-05-17
  - Updated to new manifest format.
  - Added content-script and started scraping for href/rel, trouble is syncing
    with onRequest and recognizing which requests to amend.


